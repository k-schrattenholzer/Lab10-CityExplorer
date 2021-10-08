function mungeLocationFetch(body) {
  return {
    'latitude': body[0].lat,
    'longitude': body[0].lon,
    'formatted_query': body[0].display_name
  };
}

function mungeWeatherFetch(body) {
  const shapedWeatherData = body.map(item => {
    return {
      forecast: item.weather.description,
      time: item.valid_date
    };
  });
  return shapedWeatherData;
}

module.exports = {
  mungeLocationFetch,
  mungeWeatherFetch
};


  