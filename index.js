
const express = require('express');
const app = express();
const path = require('path');
const users = require('./data');

port = 8000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/Home', (req, res) => {
    res.send('welcom the home page')
});

app.get('/about', (req, res) => {
    res.send('<h1>welcom the about page</h1>')
});

app.get('/htmlPage', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
});

app.get('/jsonData', (req, res) => {
    res.json([
        {
            name: 'rajat',
            mobile: '9876544567'
        }
        ,{
            name: 'Shivam',
            mobile: '9876544567'
        }])
});

app.get('/jsonList', (req, res) => {
    res.json(users);
});

app.get('/api', (req, res) => {
    res.send('<h1>Home</h1><a href="/api/users">home</a>');
});


app.get('/api/users/2', (req , res) => {
    const uniqData = users.find((data) => data.id === 2 )
    res.json(uniqData);
});

app.get('/api/usersdata', (req , res) => {
    const uniqData = users.map((product) => {
        const {id,name} = product;
        return {id,name}
    })
    res.json(uniqData);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});