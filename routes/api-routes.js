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

  app.get("/api/allgrocery", function(req, res) {

    // Finding all Chirps, and then returning them to the user as JSON.
    // Sequelize queries are asynchronous, which helps with perceived speed.
    // If we want something to be guaranteed to happen after the query, we'll use
    // the .then function
    db.Inventories.findAll({
      where:{usertype: "grocery"}
    }).then(function(results) {
      // results are available to us inside the .then
      console.log("this is findall features" + results)
      res.json(results);
    });

  });

  app.post("/api/inventories", function(req, res) {
    db.Inventory.create(req.body).then(function(results) {
      console.log("this is api post" +results)
      res.json(results);
    });
  });

  // app.delete("/api/inventories/:id",function(req,res){
  //   db.Inventory.destory({
  //     where:{
  //       id: req.params.id
  //     }
  //   }).then(function(dbInventory){
  //     res.json(dbInventory);
  //   })


  // })
  // app.put("/api/posts",function(req,res){

  //   db.Inventory.update({
  //     req.body,
  //     {
  //       where:{
  //         id:req.body.id
  //       }
  //     }
  //   }).then(function(dbInventory){
  //     res.json(dbInventory)
  //   })
  // })



};