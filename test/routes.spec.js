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

  
})
