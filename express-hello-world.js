const express = require('express');
// const { createServer } = require('http');
const app = express()
const date = new Date()

app.on('request', (req, res) => {
    if (req.method === 'GET' && req.url === '/') {
        res.send('Hello World!')
    }
})

app.get('/time', (req, res) => {
    res.send(date.toISOString());
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});