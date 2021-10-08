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
  return body.map(entry => {
    const container = {};
    container['name'] = entry.name;
    container['image_url'] = entry.image_url;
    container['price'] = entry.price;
    container['rating'] = entry.rating;
    container['url'] = entry.url;
    return container;
  });
}

function mungeTrailFetch(body) {
    
  return body.map(entry => {

    const container = {};

    container['name'] = entry.name;
    container['location'] = entry.city;
    container['length'] = entry.distance;
    container['stars'] = entry.rating;
    container['star_votes'] = entry.ratings;
    container['summary'] = decodeURI(entry.desc);
    container['trail_url'] = entry.url;
        
    return container;

  });
}


module.exports = {
  mungeLocationFetch,
  mungeWeatherFetch,
  mungeReviewFetch,
  mungeTrailFetch
};


  