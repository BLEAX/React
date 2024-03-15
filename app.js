const express = require('express');
const fs = require('fs');


const app = express();
const port = 80;

app.get('/', (req, res) => {
    res.send();
});

app.get('/jonggang', (req, res) => {
    res.send('<h2>go home</h2>');
});

app.listen(port);