require('dotenv').config();

const fakeRequest = require('supertest');
const app = require('../lib/app');


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

      const expectation = { 
        'forecast': expect.any(String),
        'time': expect.any(String) };

      const data = await fakeRequest(app)
        .get('/weather?daily&lat=38.123&lon=-78.543')
        .expect('Content-Type', /json/)
        .expect(200);

      expect(data.body).toEqual(expect.arrayContaining([expectation]));
    });

    test('returns review data', async() => {

      const expectation = {
        name: expect.any(String),
        image_url: expect.any(String),
        price: expect.any(String),
        rating: expect.any(Number),
        url: expect.any(String)
      };

      const data = await fakeRequest(app)
        .get('/reviews/?latitude=33.7489924&longitude=-84.3902644')
        .expect('Content-Type', /json/)
        .expect(200);

      expect(data.body).toEqual(expect.arrayContaining([expectation]));
    });

    test('returns trail data', async() => {

      const expectation = {
        name: expect.any(String),
        location: expect.any(String),
        length: expect.any(Number),
        stars: expect.any(Number),
        star_votes: expect.any(Number),
        summary: expect.any(String),
        trail_url: expect.any(String)
      };


      const data = await fakeRequest(app)
        .get('/trails?latitude=35.0841034&longitude=-106.650985')
        .expect('Content-Type', /json/)
        .expect(200);

      
      expect(data.body).toEqual(expect.arrayContaining([expectation]));
    });
  });
});
