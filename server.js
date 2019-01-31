const environment = process.env.NODE_ENV || 'development';

const config = require('./knexfile')[environment];
const database = require('knex')(config);
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('port', process.env.PORT || 3000);
app.locals.title = 'US Music Festivals API';

app.use(bodyParser.json())

app.get('/', (request, response) => {
  response.send(`${app.locals.title}`)
});

app.get('/api/v1/states', (request, response) => {
  // get all states

  database('states').select()
    .then((states) => {
      response.status(200).json(states)
    })
    .catch((error) => {
      response.status(500).json({ error });
    })
});

app.post('/api/v1/states', (request, response) => {
  //Create a state
  const state = request.body;

  let result = ['state', 'number_of_music_festivals', 'major_airport', 'tourism_website'].every((prop) => {
    return request.body.hasOwnProperty(prop);
  })

  //happy path
  if (result) {
    database('states').insert(state, 'id')
      .then((state) => {
        response.status(201).json({ id: state[0] });
      })
      .catch((error) => {
        response.status(500).json({ error })
      })
  } else {
    //sad path
    response.status(422).send({
      error: 'You are missing data! Expected format: {  state: <string>, number_of_music_festivals: <number>, major_airport: <string>, tourism_website: <string> }'
    })
  }
});

app.get('/api/v1/festivals', (request, response) => {
  // get all festivals
  database('festivals').select()
    .then((festivals) => {
      response.status(200).json(festivals)
    })
    .catch((error) => {
      response.status(500).json({ error });
    })
});

app.post('/api/v1/states/:stateID/festivals', (request, response) => {
  // right now there aren't ids on our states, so we need to create the db so we can use the ids for posting and getting


  //Post a festival to all festivals 
  // create the festival
  const festival = request.body;
  const stateID = request.params.stateID;
  const state = app.locals.states.find(state => state.id === stateID);
  // console.log(app.locals.states)
  let result = ['festival_name', 'start_end_dates', 'city', 'image', 'state_id'].every((prop) => {
    return request.body.hasOwnProperty(prop);
  })
  // console.log(result)
  //happy path
  if (result) {
    // app.locals.festivals[].push(festival);
    return response.status(201).json(festival);
  } else {
    //sad path
    response.status(422).send({
      error: 'You are missing data! Expected format: { festival_name: <string>, start_end_dates: <string>, city: <string>, image: <string>, state_id: <number> }'
    })
  }
})

app.patch('/api/v1/festivals/:stateID', (request, response) => {
  // update a state by id
});

app.delete('/api/v1/states/:stateID', (request, response) => {
  // delete a state by id
});

app.get('/api/v1/states/:stateID/festivals', (request, response) => {
  // get all festivals in a given state
});

app.get('/api/v1/festivals/:festivalID', (request, response) => {
  // get a festival by id
});

app.delete('/api/v1/festivals/:festivalID', (request, response) => {
  // delete a festival by id
});

app.patch('/api/v1/festivals/:festivalID', (request, response) => {
  // update a festival by id
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on ${app.get('port')}`)
});

module.exports = app;
