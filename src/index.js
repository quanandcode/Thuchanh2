const { urlencoded, json } = require("express");
const express = require("express");
const { engine } = require("express-handlebars");
var methodOverride = require("method-override");
const path = require("path");
const app = express();
const db = require("./config/db/index");
const port = 3000;
const route = require("./route/index");
const { log } = require("console");
const cookie = require("cookie-parser");

// HTTP logger
// app.use(morgan("combined"));

// Template engine
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
    helpers: {
      sum: function (a, b) {
        return a + b;
      },
    },
  })
);
//add middleware
app.use(cookie());
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resource", "views"));
//set use static file
app.use(express.static("src/public/"));
// set up route
//connect database
db.connect();
app.use(
  urlencoded({
    extended: true,
  })
);
app.use(json());
app.use(methodOverride("X-HTTP-Method-Override"));
app.use(methodOverride("_method"));
route(app);
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
