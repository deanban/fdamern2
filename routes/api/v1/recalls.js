const express = require("express");
const router = express.Router();
const recalls = require("../../controllers/recall_controller");
// const cors = require("cors");

router.get("/index", (req, res) => {
  res.json({
    msg: "index works"
  });
});
router.get("/recalls", recalls.findAll);

module.exports = router;
