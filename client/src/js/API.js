import Task from "./task.js";

const APIURL = 'http://localhost:3000/api';
async function getTasks(filter){
    let url = APIURL+"/tasks";
    if(filter){
        const queryParams = "?filter=" + filter;
        url += queryParams;
    }
    const response = await fetch(url);
    const tasksJson = await response.json();
    if(response.ok){
        return tasksJson.map((t) => Task.from(t));
    } else {
        throw tasksJson;  // An object with the error coming from the server
    }
}

async function addTask(task) {
    return new Promise((resolve, reject) => {
        fetch(APIURL+'/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(task),
        }).then( (response) => {
            if(response.ok) {
                response.json()
                .then((data) => resolve(data));
            } else {
                // analyze the cause of error
                response.json()
                .then( (obj) => {reject(obj);} ) // error msg in the response body
                .catch( (err) => {reject({ errors: [{ param: "Application", msg: "Cannot parse server response" }] }) }); // something else
            }
        }).catch( (err) => {reject({ errors: [{ param: "Server", msg: "Cannot communicate" }] }) }); // connection errors
    });
}

async function updateTask(task) {
    return new Promise((resolve, reject) => {
        fetch(APIURL+'/tasks/' + task.id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(task),
        }).then( (response) => {
            if(response.ok) {
                resolve(null);
            } else {
                // analyze the cause of error
                response.json()
                .then( (obj) => {reject(obj);} ) // error msg in the response body
                .catch( (err) => {reject({ errors: [{ param: "Application", msg: "Cannot parse server response" }] }) }); // something else
            }
        }).catch( (err) => {reject({ errors: [{ param: "Server", msg: "Cannot communicate" }] }) }); // connection errors
    });
}

async function deleteTask(taskId) {
    return new Promise((resolve, reject) => {
        fetch(APIURL+'/tasks/' + taskId, {
            method: 'DELETE'
        }).then( (response) => {
            if(response.ok) {
                resolve(null);
            } else {
                // analyze the cause of error
                response.json()
                .then( (obj) => {reject(obj);} ) // error msg in the response body
                .catch( (err) => {reject({ errors: [{ param: "Application", msg: "Cannot parse server response" }] }) }); // something else
            }
        }).catch( (err) => {reject({ errors: [{ param: "Server", msg: "Cannot communicate" }] }) }); // connection errors
    });
}

export {getTasks, addTask, deleteTask, updateTask};