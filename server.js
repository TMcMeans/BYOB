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

app.post('/api/v1/festivals', (request, response) => {
  //Post a festival to all festivals 
  const festival = request.body;

  let result = ['festival_name', 'start_end_dates', 'city', 'image', 'state_id'].every((prop) => {
    return request.body.hasOwnProperty(prop);
  })

  //happy path
  if (result) {
    database('festivals').insert(festival, 'id')
      .then((festival) => {
        response.status(201).json({ id: festival[0] });
      })
      .catch((error) => {
        response.status(500).json({ error })
      })
  } else {
    //sad path
    response.status(422).send({
      error: 'You are missing data! Expected format: { festival_name: <string>, start_end_dates: <string>, city: <string>, image: <string>, state_id: <number> }'
    })
  }
})

app.get('/api/v1/states/:stateID/festivals', (request, response) => {
  // get all festivals in a given state
  database('festivals').where('state_id', request.params.stateID).select()
    .then(festivals => {
      if (festivals.length) {
        response.status(200).json(festivals)
      } else {
        response.status(404).json({
          error: `Could not find festivals with state_id of ${request.params.stateID}`
        })
      }
    })
    .catch(err => {
      response.status(500).json({ err })
    })
});


app.put('/api/v1/states/:stateID', (request, response) => {
  // update a state by id
  const { stateID } = request.params;
  const updatedState = request.body;
  let result = ['state', 'number_of_music_festivals', 'major_airport', 'tourism_website'].every((prop) => {
    return request.body.hasOwnProperty(prop);
  });

  if (result) {
    // happy
    database('states').where('id', stateID).update(updatedState)
      .then(state => {
        response.status(200).json(`Successfully updated state with id of ${stateID}`)
      })
      .catch((error) => {
        response.status(500).json({ error: `State with id of ${stateID} is not found` })
      })
  } else {
    //sad path
    response.status(422).send({
      error: 'You are missing data! Expected format: {  state: <string>, number_of_music_festivals: <number>, major_airport: <string>, tourism_website: <string> }'
    })
  }
});

app.delete('/api/v1/states/:stateID', (request, response) => {
  // delete a state by id
  const { stateID } = request.params;

  database('festivals')
    .where({ state_id: stateID })
    .del()
    .then(() =>
      database('states')
        .where({ id: stateID })
        .del()
    )
    .then(state => {
      response.status(202).json(`State: ${stateID} successfully deleted`);
    })
    .catch((err) => {
      // console.log(response)
      response.status(500).json({
        error: `Could not find state with id of ${request.params.stateID}`
      })
    })
});

app.get('/api/v1/festivals/:festivalID', (request, response) => {
  // get a festival by id
  const { festivalID } = request.params;

  database('festivals').where('id', festivalID).select()
    .then(festival => {
      if (festival) {
        response.status(200).json(festival)
      } else {
        response.status(404).json({
          error: `Could not find festival with id of ${request.params.festivalID}`
        })
      }
    })
    .catch((error) => {
      response.status(500).json({ error })
    })
});

app.put('/api/v1/festivals/:festivalID', (request, response) => {
  // update a festival by id
  const { festivalID } = request.params;
  const updatedFestival = request.body;
  let result = ['festival_name', 'start_end_dates', 'city', 'image'].every((prop) => {
    return request.body.hasOwnProperty(prop);
  });

  if (result) {
    // happy
    database('festivals').where('id', festivalID).update(updatedFestival)
      .then(festival => {
        response.status(200).json(`Successfully updated festival with id of ${festivalID}`)
      })
      .catch((error) => {
        response.status(500).json({ error: `Festival with id of ${festivalID} is not found` })
      })
  } else {
    //sad path
    response.status(422).send({
      error: 'You are missing data! Expected format: {  festival_name: <string>, start_end_dates: <string>, city: <string>, image: <string> }'
    })
  }
});

app.delete('/api/v1/festivals/:festivalID', (request, response) => {
  // delete a festival by id
  const { festivalID } = request.params;

  database('festivals')
    .where({ id: festivalID })
    .del()
    .then(festival => {
      response.status(202).json(`Festival: ${festivalID} successfully deleted`);
    })
    .catch((err) => {
      response.status(404).json({
        error: `Could not find festival with id of ${request.params.festivalID}`
      })
    })
});

// write endpoint to query states for a certain number of festivals (>5 or <10 or something)

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on ${app.get('port')}`)
});

module.exports = app;
