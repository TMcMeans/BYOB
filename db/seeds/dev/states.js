import states from './data/states.js'
import festivals from './data/festivals.js'

const createState = (knex, state) => {
  return knex('states').insert({
    state: state.state,
    tourism_website: state.tourism_website,
    major_airport: state.major_airport,
    number_of_music_festivals: state.number_of_music_festivals
  }, 'id')
    .then(stateId => {
      let festivalPromises = [];

      festivals.forEach(festival => {
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







