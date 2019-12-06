const startupDebugger = require("debug")("app:startup");
const dbDebugger = require("debug")("app:db");
const config = require("config");
const morgan = require("morgan");
const helmet = require("helmet");
const mongoose = require("mongoose");
const Joi = require("joi");
const express = require("express");
const app = express();
const auth = require("./routes/auth");
const users = require("./routes/users");
const pictures = require("./routes/pictures");

app.use(express.json());
app.use(express.static("public"));
app.use(helmet());
app.use("/api/auth", auth);
app.use("/api/users", users);
app.use("/api/pictures", pictures);

console.log(`Application Name: ${config.get("name")}`);

if (app.get("env") === "development") {
  app.use(morgan("tiny"));
  startupDebugger("Morgan enabled...");
}

mongoose
  .connect("mongodb://localhost/loudcloud")
  .then(dbDebugger("Connected to MongoDB"))
  .catch(err => {
    dbDebugger(`There was a problem connecting to MongoDB: ${err}`);
  });

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
