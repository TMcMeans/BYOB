
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('festivals').del()
    .then(() => knex('states').del())
    .then(function () {
      // Inserts seed entries
      return Promise.all([
        knex('states').insert([
          {
            state: 'Arizona',
            number_of_music_festivals: 10,
            major_airport: 'Phoenix Sky Harbor International Airport',
            tourism_website: 'https://www.visitarizona.com'
          },
          {
            state: 'California',
            number_of_music_festivals: 38,
            major_airport: 'Los Angeles International Airport',
            tourism_website: 'https://www.visitcalifornia.com'
          },
          {
            state: 'Colorado',
            number_of_music_festivals: 9,
            major_airport: 'Denver International Airport',
            tourism_website: 'https://www.colorado.com'
          }
        ], 'id')
        .then(state => {
          return knex('festivals').insert([
            { id: 1,
              festival_name: 'Arizona Roots',
              start_end_dates: '2/9/19-2/10/19',
              city: 'Chandler',
              image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2016/10/California-Roots-Hero-Pic-600x400.jpg',
              state_id: state[0]
            },
            { id: 2,
              festival_name: 'One Love Cali',
              start_end_dates: '2/8/19-2/10/19',
              city: 'Long Beach',
              image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2018/11/Reggae-1-600x400.jpg',
              state_id: state[1]
            },
            { id: 3,
              festival_name: 'Country Jam Colorado',
              start_end_dates: '6/13/19-6/16/19',
              city: 'Grand Junction',
              image: 'https://1b7ta73fjmj23201tc3suvsi-wpengine.netdna-ssl.com/wp-content/uploads/2018/11/Country-Jam-Hero-600x400.jpg',
              state_id: state[2]
            }
          ])
        })
        .then(() => console.log('Seeding is complete'))
        .catch(error => console.log(`Error seeding data: ${error}`))
      ])
    })
    .catch(error => console.log(`Error seeding data: ${error}`))
};
