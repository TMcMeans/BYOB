const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
const server = require('../server.js');
const states = require('../data/states.js');
const festivals = require('../data/festivals.js');

chai.use(chaiHttp);

describe('Client Routes', () => {
  // front end

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
  before(done => {
   // Run migrations and seeds for test database
   done();
  });

  beforeEach((done) => {
   // Would normally run your seed(s), which includes clearing all records
   // from each of the tables
   server.locals.states = states;
   server.locals.festivals = festivals;
   done();
  });

  describe('/api/v1/states', () => {
    it('should GET all states', done => {

    });

    it('should POST to states', done => {

    });

    it('should return a 422 error', done => {

    })
  });

  describe('/api/v1/festivals', () => {
    it('should GET all festivals', done => {

    });

    it('should POST to festivals', done => {

    });

    it('should return a 422 error', done => {

    })
  });

  describe('/api/v1/states/:stateID', () => {
    it('should PATCH a state by id', done => {

    });

    it('should DELETE a state by id', done => {

    })
  });

  describe('/api/v1/states/:stateID/festivals', () => {
    it('should GET all festivals by a state', done => {

    })
  });

  describe('/api/v1/festivals/:festivalID', () => {
    it('should GET all festivals', done => {

    });

    it('should PATCH to festivals', done => {

    });

    it('should DELETE a festival by id', done => {

    })
  });
})
