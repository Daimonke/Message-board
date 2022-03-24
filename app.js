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
    messages.push(req.body)
    res.send('OK')
})
app.get('/api/messages', (req, res) => {
    res.send(messages)
})

module.exports = app;
