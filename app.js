const express = require('express');
const fetch = require('node-fetch');
const app = express();
const config = require('./config');
app.set('view engine', 'ejs');
app.use(express.static('public'));

const port = 3000;
const authentication = `${config.EMAIL}/token:${config.API_KEY}`;
let buff = Buffer.from(authentication);
let base64data = buff.toString('base64');
const url = 'https://zcchoang.zendesk.com/api/v2/tickets.json';

app.get('/', (req, res) => {
    fetch(url, {
        headers: {
            Authorization: 'Basic ' + base64data,
        },
    })
        .then((res) => res.json())
        .then((data) => {
            res.render('index', { tickets: data.tickets });
        })
        .catch((err) => {
            res.render('error', {
                errorMessage: err,
            });
        });
});

app.get('/ticket/:id', (req, res) => {
    fetch(url, {
        headers: {
            Authorization: 'Basic ' + base64data,
        },
    })
        .then((res) => res.json())
        .then((data) => {
            const ticket = data.tickets.find(
                (ticket) => ticket.id == req.params.id
            );
            res.render('details', { ticket: ticket });
        })
        .catch((err) => {
            res.render('error', {
                errorMessage: err,
            });
        });
});

const server = app.listen(port);

module.exports = server;
