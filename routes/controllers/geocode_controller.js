const Geocode = require("../models/Geocode");

exports.findAll = (req, res) => {
  Geocode.find()
    .then(geocodes => {
      res.send(geocodes);
    })
    .catch(err => {
      res.status(400).send({ message: err.message });
    });
};
