let request = require("request");

const fetchBreedDescription = function(input, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${input}`, function (error, response, body) {
  const data = JSON.parse(body)[0].description;  
  callback(error, data);
  })};
module.exports = { fetchBreedDescription };