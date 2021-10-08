const { mungeLocationFetch, mungeWeatherFetch, mungeReviewFetch } = require('../lib/utils.js');
const { location_data } = require('../data/location-raw.js');
const { weather_data } = require('../data/weather-raw.js');
const { review_data } = require('../data/review-raw.js');

describe('utils', () => {

  test('munge location data', async() => {
    const expectation = {
      'latitude': expect.any(String),
      'longitude': expect.any(String),
      'formatted_query': expect.any(String)
    };
    
    const mungedData = mungeLocationFetch(location_data);
    expect(mungedData).toEqual(expectation);
  });

  test('munge weather data', async() => {
    const expectation = {
      'forecast': expect.any(String),
      'time': expect.any(String),
    };
    
    const mungedData = mungeWeatherFetch(weather_data);
    expect(mungedData[0]).toEqual(expectation);
  });
  
  test('munge review data', async() => {
    const expectation = {
      name: expect.any(String),
      image_url: expect.any(String),
      price: expect.any(String),
      rating: expect.any(Number),
      url: expect.any(String)
    };
    
    const mungedData = mungeReviewFetch(review_data);
    expect(mungedData[0]).toEqual(expectation);
  });
});