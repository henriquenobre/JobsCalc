const express = require('express');
const routes = express.Router();

const views = __dirname + '/views';

const profile = {
    name: 'Henrique',
    avatar:'https://github.com/henriquenobre.png',
    "monthly-budget": 4000,
    "hours-per-day": 6,
    "days-per-week": 5,
    "vacation-per-year": 4
}

//request, response
routes.get('/', (req, res) => res.render(views +'/index', {profile}))
routes.get('/job', (req, res) => res.render(views + '/job'))
routes.post('/job', (req, res) => {})
routes.get('/job-edit', (req, res) => res.render(views + '/job-edit'))
routes.get('/profile', (req, res) => res.render(views + '/profile', {profile}))



module.exports = routes;