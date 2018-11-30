const keys = require("./mlab");

module.exports = [
  `https://api.fda.gov/food/enforcement.json?api_key=${
    keys.apiKey
  }&search=classification:"Class+III"&limit=2`,
  `https://api.fda.gov/food/enforcement.json?api_key=${
    keys.apiKey
  }&search=classification:"Class+II"&limit=2`,
  `https://api.fda.gov/food/enforcement.json?api_key=${
    keys.apiKey
  }&search=classification:"Class+I"&limit=2`
];
