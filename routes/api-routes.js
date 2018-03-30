// *************// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var db = require("../models");
// Routes
// =============================================================
module.exports = function(app) {

  // Get all chirps
  app.get("/api/inventories", function(req, res) {

    db.inventory.findAll({
      include:[db.user]
    }).then(function(results) {
      // results are available to us inside the .then
      res.json(results);
      console.log("this is findall" +results)
    });

  });

  app.get("/api/allinventories", function(req, res) {

    // Finding all Chirps, and then returning them to the user as JSON.
    // Sequelize queries are asynchronous, which helps with perceived speed.
    // If we want something to be guaranteed to happen after the query, we'll use
    // the .then function
    db.inventory.findAll({
      where:{usertype: "grocery"},
      include:[db.user]
    }).then(function(results) {
      // results are available to us inside the .then
      console.log("this is findall features" + results)
      res.json(results);
    });

  });

  app.post("/api/inventories", function(req, res) {
    db.user.findOne({where:{username:req.body.username}
    }).then(function(result){
      var id = result.id;
      var fullInventoryObject = req.body;
      fullInventoryObject.userId = id;

      
      db.inventory.create(fullInventoryObject).then(function(results) {
        console.log("this is api post" +results)
        res.json(results);
        
    })

    });
  });
};// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var db = require("../models");
// Routes
// =============================================================
module.exports = function(app) {

  app.get("/api/inventories", function(req, res) {
    db.inventory.findAll({
      include:[db.user]
    }).then(function(results) {
      // results are available to us inside the .then
      res.json(results);
      console.log("this is findall" +results)
    });
  });

  app.get("/api/allinventories", function(req, res) {
    db.inventory.findAll({
      where:{usertype: "grocery"},
      include:[db.user]
    }).then(function(results) {
      // results are available to us inside the .then
      console.log("this is findall features" + results)
      res.json(results);
    });
  });

  app.post("/api/inventories", function(req, res) {
    db.user.findOne({where:{username:req.body.username}
    }).then(function(result){
      var id = result.id;
      var fullInventoryObject = req.body;
      fullInventoryObject.userId = id;
      //linking the username with inventory and username in user
      db.inventory.create(fullInventoryObject).then(function(results) {
        console.log("this is api post" +results)
        res.json(results);
        
    })
    });
  });
};