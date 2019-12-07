const express = require("express");
const bodyParser = require("body-parser");
const config = require("config");
const cors = require("cors");
const mongoose = require("mongoose");
const dbConfig = require("./config/database.config.js");
const app = express();

if (!config.get("jwtPrivateKey")) {
  console.log("FATAL ERROR: jwtPrivateKey is not defined.");
  process.exit(1);
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

mongoose.Promise = global.Promise;

mongoose
  .connect(dbConfig.url, {
    useNewUrlParser: true
  })
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch(err => {
    console.log("Could not connect to the database", err);
    process.exit();
  });

app.get("/api", (req, res) => {
  res.json({ message: "Welcome to the API backend for Loudcloud Photo." });
});

require("./routes/auth.routes.js")(app);
require("./routes/pictures.routes.js")(app);
require("./routes/users.routes.js")(app);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
