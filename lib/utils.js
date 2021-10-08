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

function mungeReviewFetch(body) {
  return body.map(e => {
    const container = {};
    container['name'] = e.name;
    container['image_url'] = e.image_url;
    container['price'] = e.price;
    container['rating'] = e.rating;
    container['url'] = e.url;
    return container;
  });
}

function mungeTrailFetch(body) {

  return body.map(e => {

    const container = {};

    container['name'] = e.name;
    container['location'] = e.city;
    container['length'] = e.distance;
    container['stars'] = e.rating;
    container['star_votes'] = e.ratings;
    container['summary'] = decodeURI(e.desc);
    container['trail_url'] = e.url;
        
    return container;

  });
}


module.exports = {
  mungeLocationFetch,
  mungeWeatherFetch,
  mungeReviewFetch,
  mungeTrailFetch
};


  