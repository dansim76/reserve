//in sequelize, the class activity exercises used "routes"
//so reference week15 exercises' routes folder for what to input here
//also know that handlebars will be referencing this file
//refer to week 14 to see how that's done


//this file offers a set of routes for displaying and saving data to db
var db = require("../models");


module.exports = function(app){

  app.get("/api/login", function(req,res){
    //if grocery then grocery table else store table
    //using login information from tables 
    //login.html
  })

  app.post("/api/register", function(req,res){
    //if grocery then grocery table else store table
    //using login information from tables 
    //register.html
  })
}

