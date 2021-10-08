const { mungeLocationFetch, mungeWeatherFetch } = require('../lib/utils.js');
const { location_data } = require('../data/location-raw.js');
const { weather_data } = require('../data/weather-raw.js');

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
});