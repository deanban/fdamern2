const Recall = require("../models/Recall");

exports.findAll = (req, res) => {
  Recall.find()
    .then(recalls => {
      res.send(recalls);
    })
    .catch(err => {
      res.status(400).send({ message: err.message });
    });
};
