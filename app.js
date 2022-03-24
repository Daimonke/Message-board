const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const messages = require('./api/messages');

const app = express();

app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/messages', (req, res) => {
    res.send(messages)
})
app.post('/message', (req, res) => {
    messages.push(req.body)
    res.send('OK')
})
// messages.module.push(random)

module.exports = app;
