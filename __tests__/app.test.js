require('dotenv').config();

const { execSync } = require('child_process');

const fakeRequest = require('supertest');
const app = require('../lib/app');
const client = require('../lib/client');

describe('app routes', () => {
  describe('routes', () => {
    // let token;
  
    // beforeAll(async () => {
    //   execSync('npm run setup-db');
  
    //   await client.connect();
    //   const signInData = await fakeRequest(app)
    //     .post('/auth/signup')
    //     .send({
    //       email: 'jon@user.com',
    //       password: '1234'
    //     });
      
    //   token = signInData.body.token; // eslint-disable-line
    // }, 10000);
  
    // afterAll(done => {
    //   return client.end(done);
    // });

    test('returns location data', async() => {

      const expectation =
        {
          'formatted_query': expect.any(String),
          'latitude': expect.any(String),
          'longitude': expect.any(String)
        };

      const data = await fakeRequest(app)
        .get('/location')
        .expect('Content-Type', /json/)
        .expect(200);

      expect(data.body).toEqual(expectation);
    });

    test('returns weather data', async() => {

      const expectation = Array(7).fill({ 
        'forecast': expect.any(String),
        'time': expect.any(String) });

      const data = await fakeRequest(app)
        .get('/weather')
        .expect('Content-Type', /json/)
        .expect(200);

      expect(data.body).toEqual(expect.arrayContaining(expectation));
    });
  });
});
