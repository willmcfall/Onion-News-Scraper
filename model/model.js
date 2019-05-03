// Node dependencies
var express = require("express");
var mongojs = require("mongojs");

// Require axios and cheerio. This makes the scraping possible
var axios = require("axios");
var cheerio = require("cheerio");

// Database configuration and hook mongojs configuration to the db variable
var databaseUrl = "onion";
var collections = ["onionData"];
var db = mongojs(databaseUrl, collections);
db.on("error", function(error) {
  console.log("Database Error:", error);
});