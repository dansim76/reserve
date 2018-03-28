// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var db = require("../models");


// Routes
// =============================================================
module.exports = function(app) {

  // Get all chirps
  app.get("/api/all", function(req, res) {

    // Finding all Chirps, and then returning them to the user as JSON.
    // Sequelize queries are asynchronous, which helps with perceived speed.
    // If we want something to be guaranteed to happen after the query, we'll use
    // the .then function
    db.Inventory.findAll({}).then(function(results) {
      // results are available to us inside the .then
      res.json(results);
    });

  });

  app.post("/api/inventories", function(req, res) {
    db.Inventory.create(req.body).then(function(dbPost) {
      res.json(dbPost);
    });
  });



};