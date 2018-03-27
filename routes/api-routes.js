// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Inventory = require("../models/inventory.js");


// Routes
// =============================================================
module.exports = function(app) {

  // Get all chirps
  app.get("/api/all", function(req, res) {

    // Finding all Chirps, and then returning them to the user as JSON.
    // Sequelize queries are asynchronous, which helps with perceived speed.
    // If we want something to be guaranteed to happen after the query, we'll use
    // the .then function
    Inventory.findAll({}).then(function(results) {
      // results are available to us inside the .then
      res.json(results);
    });

  });

  // Add a chirp
  app.post("/api/inventories", function(req, res) {

    console.log("Inventory Data:");
    console.log(req.body);

    Inventory.create({
      item: req.body.item,
      quantity: req.body.quantity,
      expiration: req.body.expiration
    }).then(function(results) {
      // `results` here would be the newly created chirp
      res.end();
    });

  });

};