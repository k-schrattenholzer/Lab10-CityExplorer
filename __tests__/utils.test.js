const { mungeLocationFetch, mungeWeatherFetch } = require('../lib/utils.js');
const { location_data } = require('../data/location-raw.js');

describe('utils', () => {

  test('munge location data', async() => {
    const expectation = {
      'latitude': '33.7489924',
      'longitude': '-84.3902644',
      'formatted_query': 'Atlanta, Fulton County, Georgia, USA'
    };
    
    const mungedData = mungeLocationFetch(location_data);
    expect(mungedData).toEqual(expectation);
  });
});