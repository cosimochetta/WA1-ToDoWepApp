const express = require('express');
const morgan = require('morgan');
const jwt = require('express-jwt');
const jsonwebtoken = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const csrf = require('csurf');
const { check, validationResult } = require('express-validator'); // validation library

const DAO = require('./DAO.js');

const jwtSecretContent = require('./secret.js');
const jwtSecret = jwtSecretContent.jwtSecret;

const BASEURI = '/api';
const PORT = 3010;

app = new express();
app.use(morgan('combined'));
app.use(express.json());

// DB error
const dbErrorObj = { errors: [{ 'param': 'Server', 'msg': 'Database error' }] };
// Authorization error
const authErrorObj = { errors: [{ 'param': 'Server', 'msg': 'Authorization error' }] };

const expireTime = 300; //seconds


// Authentication endpoint

app.post('/api/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    DAO.checkUserPass(username, password)
        .then((userObj) => {
            const token = jsonwebtoken.sign({ id: userObj.id, name: userObj.name }, jwtSecret, { expiresIn: expireTime });
            res.cookie('token', token, { httpOnly: true, sameSite: true, maxAge: 1000 * expireTime });
            res.json(userObj);
        }).catch(
            // Delay response when wrong user/pass is sent to avoid fast guessing attempts
            () => new Promise((resolve) => {
                setTimeout(resolve, 1000)
            }).then(
                () => res.status(401).end()
            )
        );
});

app.use(cookieParser());

const csrfProtection = csrf({
    cookie: { httpOnly: true, sameSite: true }
});

app.post('/api/logout', (req, res) => {
    res.clearCookie('token').end();
});


app.use(csrfProtection);

// For the rest of the code, all APIs require authentication
app.use(
    jwt({
      secret: jwtSecret,
      getToken: req => req.cookies.token
    })
  );
  
  // Provide an endpoint for the App to retrieve the CSRF token
  app.get('/api/csrf-token', csrfProtection, (req, res) => {
    res.json({ csrfToken: req.csrfToken() });
  });
  
  

  // To return a better object in case of errors
  app.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
      res.status(401).json(authErrorObj);
    }
  });


// REST API endpoints

//GET /tasks
app.get(BASEURI + '/tasks', (req, res) => {
    DAO.getTasks(req.query.filter, req.query.userId)
        .then((tasks) => {
            res.json(tasks);
        })
        .catch((err) => {
            res.status(500).json({
                errors: [{ 'msg': err }],
            });
        });
});

//GET /tasks/<taskId>
app.get(BASEURI + '/tasks/:taskId', (req, res) => {
    DAO.getTask(req.params.taskId)
        .then((course) => {
            if (!course) {
                res.status(404).send();
            } else {
                res.json(course);
            }
        })
        .catch((err) => {
            res.status(500).json({
                errors: [{ 'param': 'Server', 'msg': err }],
            });
        });
});

//POST /tasks
app.post(BASEURI + '/tasks', (req, res) => {
    const task = req.body;
    if (!task) {
        res.status(400).end();
    } else {
        DAO.createTask(task)
            .then((id) => { res.status(201).json({ "id": id }) })
            .catch((err) => res.status(500).json({
                errors: [{ 'param': 'Server', 'msg': err }],
            }));
    }
});

//DELETE /tasks/<taskId>
app.delete(BASEURI + '/tasks/:taskId', (req, res) => {
    DAO.deleteTask(req.params.taskId)
        .then((result) => res.status(204).end())
        .catch((err) => res.status(500).json({
            errors: [{ 'param': 'Server', 'msg': err }],
        }));
});

//PUT /tasks/<taskId>
app.put(BASEURI + '/tasks/:taskId', (req, res) => {
    if (!req.body.id) {
        res.status(400).end();
    } else {
        const task = req.body;
        DAO.updateTask(req.params.taskId, task)
            .then((result) => res.status(200).end())
            .catch((err) => res.status(500).json({
                errors: [{ 'param': 'Server', 'msg': err }],
            }));
    }
});




//activate server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}/`));