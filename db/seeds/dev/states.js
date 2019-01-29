const states = require('../../../data/states.js')
const festivals = require('../../../data/festivals.js')

const createState = (knex, state) => {
  return knex('states').insert({
    state: state.state,
    number_of_music_festivals: state.number_of_music_festivals,
    major_airport: state.major_airport,
    tourism_website: state.tourism_website
  }, 'id')
    .then(stateId => {
      let festivalPromises = [];

      festivals[state.state].forEach(festival => {
        festivalPromises.push(
          createFestival(knex, {
            festival_name: festival.festival_name,
            start_end_dates: festival.start_end_dates,
            image: festival.image,
            city: festival.city,
            state_id: stateId[0]
          })
        )
      });

      return Promise.all(festivalPromises);
    })
};

const createFestival = (knex, festival) => {
  return knex('festivals').insert(festival)
}

exports.seed = (knex, Promise) => {
  return knex('festivals').del()
    .then(() => knex('states').del())
    .then(() => {
      let statePromises = [];

      states.forEach(state => {
        statePromises.push(createState(knex, state));
      });
      return Promise.all(statePromises);
    })
    .catch(error => console.log(`Error seeding data: ${error}`));
}







