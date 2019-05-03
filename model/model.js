// Load required modules
var mongojs = require("mongojs");

// Database configuration and hook mongojs configuration to the db variable
var databaseUrl = "onion";
var collections = ["onionData"];
var db = mongojs(databaseUrl, collections);
db.on("error", function(error) {
  console.log("Database Error:", error);
});

module.export = db;