//this file offers a set of routes for displaying and saving data to db
var db = require("../models");


module.exports = function(app){


  //front page reserve.html doesn't need anything

  //creating new row in sql for new registration
  app.post("/api/registration", function(req,res){
    //if grocery then grocery table else store table
    //register.html
    if (req.body.type === 'foodbank'){ //need to add type into sql
      db.foodbank.create(req.body).then(function(db) {
        res.json(db);
      });
    }

  });


  //verifying login information against sql
  app.get("/api/login", function(req,res){
    //if grocery then grocery table else store table
    //using login information from tables 
    //login.html
  });



}
