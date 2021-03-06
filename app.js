const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const messages = require('./api/messages');
const cors = require('cors')

const app = express();

app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

app.post('/message', (req, res) => {
    res.status(200)
    messages.push(req.body)
    res.redirect('/')
})
app.get('/api/messages', (req, res) => {
    res.status(200)
    res.send(messages)
})

module.exports = app;
