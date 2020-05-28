const express = require('express');
const morgan = require('morgan');
// const cors = require('cors');

const DAO = require('./DAO.js');

const BASEURI = '/api';
const PORT = 3010;

app = new express();
app.use(morgan('combined'));
app.use(express.json());
// app.use(cors());

// REST API endpoints

//GET /tasks
app.get(BASEURI+'/tasks', (req, res) => {
    DAO.getTasks(req.query.filter)
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
app.get(BASEURI+'/tasks/:taskId', (req, res) => {
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
app.post(BASEURI+'/tasks', (req, res) => {
    const task = req.body;
    if (!task) {
        res.status(400).end();
    } else {
        DAO.createTask(task)
            .then((id) => {res.status(201).json({ "id": id })})
            .catch((err) => res.status(500).json({
                errors: [{ 'param': 'Server', 'msg': err }],
            }));
    }
});

//DELETE /tasks/<taskId>
app.delete(BASEURI+'/tasks/:taskId', (req, res) => {
    DAO.deleteTask(req.params.taskId)
        .then((result) => res.status(204).end())
        .catch((err) => res.status(500).json({
            errors: [{ 'param': 'Server', 'msg': err }],
        }));
});

//PUT /tasks/<taskId>
app.put(BASEURI+'/tasks/:taskId', (req, res) => {
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