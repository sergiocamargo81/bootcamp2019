const express = require('express');

const server = express();

server.use(express.json());

// Query params = ?teste=1 = req.query.teste
// Route params = /users/:id  = req.params.id
// Body params  = req.body

const users = ['Diego', 'Robson', 'Victor'];

server.use((req, res, next) => {
    console.time('Request');
    console.log(`Método: ${req.method}; URL: ${req.url}`);

    next();

    console.timeEnd('Request');
})

function checkUserExist(req, res, next) {
    if (!req.body.name) {
        return res.status(400).json({ error: 'User name is required'});
    }

    return next();
}

function checkUserInArray(req, res, next) {
    const user = users[req.params.index];

    if (!user) {
        return res.status(400).json({ error: 'User doesn\'t exists' });
    }

    req.user = user;

    return next();
}

server.get('/users', (req, res) => {
    return res.json(users);
});

server.get('/users/:index', checkUserInArray, (req, res) => {
    return res.json(req.user);
});

server.post('/users', checkUserExist, (req, res) => {
    console.log(req.body);

    const { name } = req.body;

    users.push(name);

    return res.json(users);
});

server.put('/users/:index', checkUserInArray, checkUserExist, (req, res) => {
    const { index } = req.params;
    const { name } = req.body;

    users[index] = name;

    return res.json(users);
});

server.delete('/users/:index', checkUserInArray, (req, res) => {
    const { index } = req.params;

    users.splice(index, 1);

    return res.send();
});

server.listen(3000);