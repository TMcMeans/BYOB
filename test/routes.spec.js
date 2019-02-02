process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const server = require('../server.js');
const config = require('../knexfile')['test'];
const database = require('knex')(config);


// const states = require('../data/states.js');
// const festivals = require('../data/festivals.js');

chai.use(chaiHttp);

describe('Client Routes', () => {
  // happy path
  it('should return the homepage with text', done => {
    chai.request(server)
      .get('/')
      .end((err, response) => {
        response.should.have.status(200);
        response.should.be.html;
        response.res.text.should.equal('US Music Festivals API');
        done();
      });
  });

  // sad path
  it('should return 404 for nonexisting routes', done => {
    chai.request(server)
      .get('/sad')
      .end((err, response) => {
        response.should.have.status(404)
        done();
      });
  });
});

describe('API Routes', () => {
  beforeEach((done) => {
    // Would normally run your seed(s), which includes clearing all records
    // from each of the tables
    database.migrate.rollback()
      .then(() => database.migrate.latest())
      .then(() => database.seed.run())
      .then(() => done())
  });

  describe('/api/v1/states', () => {
    it('GET should return all states', done => {
      chai.request(server)
        .get('/api/v1/states')
        .end((err, response) => {
          response.should.have.status(200);
          response.body.should.be.a('array');
          response.body[0].should.have.property('state')
          response.body[0].should.have.property('number_of_music_festivals')
          response.body[0].should.have.property('major_airport')
          response.body[0].should.have.property('tourism_website')
          done();
        })
    });

    //happy path
    it('POST should create a new state', done => {
      chai.request(server)
        .post('/api/v1/states')
        .send({
          state: 'New Jersey',
          number_of_music_festivals: 5,
          major_airport: 'Newark Liberty International Airport',
          tourism_website: 'https://www.visitnj.org'
        })
        .end((err, response) => {
          response.should.have.status(201);
          response.body.should.be.a('object');
          response.body.should.have.property('id');
          done();
        })
    });

    // sad path
    it('POST should return a 422 error when creating a new state if request data has errors', done => {
      chai.request(server)
        .post('/api/v1/states')
        .send({
          state: 'New Jersey',
          number_of_music_festivals: 5,
          major_airport: 'Newark Liberty International Airport'
          //tourism_website information is missing
        })
        .end((err, response) => {
          response.should.have.status(422);
          response.body.error.should.equal('You are missing data! Expected format: {  state: <string>, number_of_music_festivals: <number>, major_airport: <string>, tourism_website: <string> }');
          done();
        });
    });
  });

  describe('/api/v1/festivals', () => {
    it('GET should return all festivals', done => {
      chai.request(server)
        .get('/api/v1/festivals')
        .end((err, response) => {
          response.should.have.status(200);
          response.body.should.be.a('array');
          response.body[0].should.have.property('festival_name');
          response.body[0].should.have.property('start_end_dates');
          response.body[0].should.have.property('city');
          response.body[0].should.have.property('state_id');
          done();
        })
    });

    //SKIPPED TEST
    it.skip('POST should create a festival', done => {
      chai.request(server)
        .post('/api/v1/festivals')
        .send({
          festival_name: 'Made Up Music Festival',
          start_end_dates: '6/1/19-6/2/19',
          city: 'Nowhere',
          image: 'https://exampleimage/123.jpg',
          state_id: 1
        })
        .end((err, response) => {
          response.should.have.status(201);
          response.body.should.be.a('object');
          response.body.should.have.property('id');
          done();
        })
    });

    it('POST should return a 422 error when creating a new festival if data has errors', done => {
      chai.request(server)
        .post('/api/v1/festivals')
        .send({
          festival_name: 'Made Up Music Festival',
          start_end_dates: '6/1/19-6/2/19',
          image: 'https://exampleimage/123.jpg',
          state_id: 1
          //city information is missing
        })
        .end((err, response) => {
          response.should.have.status(422);
          response.body.error.should.equal('You are missing data! Expected format: { festival_name: <string>, start_end_dates: <string>, city: <string>, image: <string>, state_id: <number> }');
          done();
        });
    });
  });

  describe('/api/v1/states/:stateID/festivals', () => {
    it('GET should return all festivals by state', done => {
      chai.request(server)
        .get('/api/v1/states/1/festivals')
        .end((err, response) => {
          response.should.have.status(200);
          response.body.should.be.a('array');
          response.body[0].should.have.property('festival_name');
          response.body[0].should.have.property('start_end_dates');
          response.body[0].should.have.property('city');
          response.body[0].should.have.property('state_id');
          done();
        })
    });

    it('GET should return a 404 error if state not found', done => {
      chai.request(server)
        .get('/api/v1/states/500000/festivals')
        .end((err, response) => {
          response.should.have.status(404);
          response.body.error.should.equal('Could not find festivals with state_id of 500000');
          done();
        })
    });
  });

  describe('/api/v1/states/:stateID', () => {
    //   it('PATCH should update a state\'s data', done => {

    //   });

    //   it('PATCH should return a 404 error if state is not found in database', () => {

    //   });

    it('DELETE should delete a state', done => {
      chai.request(server)
        .delete('/api/v1/states/1')
        .end((err, response) => {
          response.should.have.status(202);
          response.body.should.equal('Entry 1 successfully deleted')
          done();
        })
    });

    it('DELETE should return a 404 error if state is not found', () => {

    });
  });

  // describe('/api/v1/festivals/:festivalID', () => {
  //   it('GET should return a festival by id', done => {

  //   });

  //   it('should PATCH to festivals', done => {

  //   });

  //   it('PATCH should return a 404 error', done => {

  //   });

  //   it('should DELETE a festival by id', done => {

  //   });

  //   it('DELETE should return a 404 error', done => {

  //   });

  // });
})
