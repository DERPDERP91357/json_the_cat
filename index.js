const { fetchBreedDescription } = require('./breedFetcher');

let rawInput = process.argv.slice(2);
if (rawInput.length !== 1) {
  throw "INPUT IS NOT VALID";
}
let input = rawInput[0];


fetchBreedDescription(input, (error, body) => {
  if (error) {
    console.error('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  }  
  if (!data) {
    throw "Could not find data on species";
  }
  console.log(data);
});