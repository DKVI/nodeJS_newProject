/** @format */

const express = require("express");
const morgan = require("morgan");
const methodOverride = require("method-override");
require("dotenv").config();
const handlebars = require("express-handlebars").engine;
const app = express();
const port = process.env.PORT || 3000;
console.log("env: ", process.env.PORT);
const path = require("path");
const db = require("./config/db");

// Connect to DB
db.connect();

app.use(express.static(path.join(__dirname, "public")));
console.log(__dirname);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));

app.engine(
  "handlebars",
  handlebars({
    helpers: {
      sum: (a, b) => a + b,
    },
  })
);

app.set("view engine", "handlebars");

app.set("views", path.join(__dirname, "resources", "views"));

const route = require("./routes");

// Route init
route(app);

app.listen(port);
