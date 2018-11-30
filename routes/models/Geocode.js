const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const dataSchema = new Schema({
  results: Array
});

module.exports = mongoose.model("Geocode", dataSchema);
