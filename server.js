// Load express modules
var express = require("express");
var app = express();

// Load express handlebar modules
var exphbs = require("express-handlebars");

// Establish middleware settings
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// Establish port settings
var PORT = process.env.PORT || 3002;
app.listen(PORT, function() {
  console.log("App running on port 3002!");
});


// Connect to the model
var db = require("./model/model")

// Connect to the view
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Connect to the controller
require("./controller/apiRoutes")(app);
require("./controller/htmlRoutes")(app);

module.exports = app;