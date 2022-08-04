let request = require("request");
let rawInput = process.argv.slice(2);

if (rawInput.length !== 1) {
  throw "INPUT IS NOT VALID";
}

let input = rawInput[0];

request(`https://api.thecatapi.com/v1/breeds/search?q=${input}`, function(error, response, body) {
  if (error) {
    console.error('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  }
  const data = JSON.parse(body)[0];
  if (!data) {
    throw "Could not find data on species";
  }
  console.log(data.description);
});