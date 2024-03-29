const request = require('request');

const geocode = (address, callback) => {
  const url =
    'https://api.mapbox.com/geocoding/v5/mapbox.places/' +
    address +
    '.json?access_token=pk.eyJ1Ijoic3RhdGljZGV2IiwiYSI6ImNrMzY5aHN4NDFqZzUzbm8yZHY2OGJ2cXUifQ._dLB_GBr2scCARgabVJNIg&limit=1';

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather services!', undefined);
    } else if (body.features.length === 0) {
      callback('Unable to find Location try another search term', undefined);
    } else {
      const obj = {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name
      };
      callback(undefined, obj);
    }
  });
};

module.exports = geocode;
