const express = require('express');

const server = express();

server.use(express.json());

var projects = [];

var TotalRequests = 0;

server.use((req, res, next) => {
    console.time('Request');

    console.log(`Method: ${req.method}; Url:${req.url}`);

    console.log(`Requests Total: ${++TotalRequests}`);

    next();

    console.timeEnd('Request');
});

function getProject(id) {
    return projects.find(n => n.id === id);
}

function removeProject(id) {
    projects = projects.filter(p => p.id !== id);
}

function checkProjectExists(req, res, next) {
    const { id } = req.params;

    if (!getProject(id)) {
        return res.status(400).json({ message: 'Project does not exists'});
    }

    next();
}

function checkProjectNotExists(req, res, next) {
    const { id } = req.body;

    if (getProject(id)) {
        return res.status(400).json({ message: 'Project already exists'});
    }

    next();
}

server.post('/projects', checkProjectNotExists, (req, res) => {
    const project = req.body;

    project.tasks = [];

    projects.push(project);

    return res.json(projects);
});

server.get('/projects', (req, res) => {
    return res.json(projects);
});

server.put('/projects/:id', checkProjectExists, (req, res) => {
    const { id } = req.params;
    const { title } = req.body;

    const project = getProject(id);
    project.title = title;

    return res.json(project);
});

server.delete('/projects/:id', checkProjectExists, (req, res) => {
    const { id } = req.params;

    removeProject(id);

    return res.send();
});

server.post('/projects/:id/tasks', checkProjectExists, (req, res) => {
    const { id } = req.params;
    const { title: task } = req.body;

    const project = getProject(id);

    project.tasks.push(task);

    res.json(project);
});

server.listen(4000);