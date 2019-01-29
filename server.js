const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('port', process.env.PORT || 3000);
app.locals.title = 'US Music Festivals API';
app.locals.states = [];
app.locals.festivals = {};

app.get('/', (request, response) => {
  response.send(`${app.locals.title}`)
});

app.get('/api/v1/states', (request, response) => {
  // get all states
});

app.get('/api/v1/festivals', (request, response) => {
  // get all festivals
});

app.get('/api/v1/states/:stateID/festivals', (request, response) => {
  // get all festivals in a given state
});

app.get('/api/v1/festivals/:festivalID', (request, response) => {
  // get a festival by id
});

app.post('/api/v1/states', (request, response) => {
  // add to states
});

app.post('/api/v1/festivals', (request, response) => {
  // add to festivals
});

app.delete('/api/v1/states/:stateID', (request, response) => {
  // delete a state by id
});

app.delete('/api/v1/festivals/:festivalID', (request, response) => {
  // delete a festival by id
});

app.patch('/api/v1/states/:stateID', (request, response) => {
  // update a state by id
});

app.patch('/api/v1/festivals/:festivalID', (request, response) => {
  // update a festival by id
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on ${app.get('port')}`)
});
