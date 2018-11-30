const express = require("express");
const router = express.Router();
const geocode = require("../../controllers/geocode_controller");
// const cors = require("cors");

router.get("/geocode", (req, res) => {
  res.json({
    msg: "geocode works"
  });
});
router.get("/geocodes", geocode.findAll);

module.exports = router;
