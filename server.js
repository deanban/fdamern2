const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const geocodes = require("./routes/api/v1/geocodes");
const recalls = require("./routes/api/v1/recalls");

const db = require("./config/keys").mongoURI;

const app = express();

mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("mongodb connection success"))
  .catch(error => console.log(error));

app.use(cors());
app.use("/api/v1", recalls);
app.use("/api/v1", geocodes);
// app.use("/api/v1", places);

//server static assets if in production
if (process.env.NODE_ENV === "production") {
  //set static folder
  app.use(express.static("client/build"));

  app.get("*", (_, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Node Port is on ${port}`));
