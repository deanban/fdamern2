const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const geocodes = require("./routes/api/v1/geocodes");
const recalls = require("./routes/api/v1/recalls");
const db = require("./config/keys").mongoURI;

const app = express();

app.get("/", (req, res) => {
  res.send("hello world!");
});

mongoose
  .connect(db)
  .then(() => console.log("mongodb connection success"))
  .catch(error => console.log(error));

app.use(cors());
app.use("/api/v1", recalls);
app.use("/api/v1", geocodes);
// app.use("/api/v1", places);

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Node Port is on ${port}`));
