// Load express, morgan, mongoose, and exphbs Node modules
var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");
var exphbs = require("express-handlebars");

// Initialize Express
// Load express-handlebar Node module for presenting handlebars templates
// Load morgan logger Node module for logging requests
// Establish Express setting to parse request body as JSON
// Establish Express setting to make public a static folder
// Start the server on port 3000
var PORT = process.env.PORT || 3000;
var app = express();
app.set("view engine", "handlebars");
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});


// Establish connection to the model
var db = require("./model/index");

// Establish connection to the view
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);

// Establish connection to the controller
require("./controller/routes")(app);

// Establish connection to MongoDB
mongoose.connect("mongodb://localhost/unit18Populater", { useNewUrlParser: true });

module.exports = app;