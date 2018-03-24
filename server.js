var express = require("express");
var bodyParser = require("body-parser");
var passport   = require('passport');
var session    = require('express-session');

var app = express();
var PORT = process.env.PORT || 8080;

var db = require("./models");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

//we won't be using handlebars for now but will change to it in the futre
//the views folder is currently not being used
//the controller folder will hold the api routes (reserve_controllers)
//in the future when we change to handlebars, controllers will monitor the handlebars, and we would not need routes folder anymore
require("./routes/html-routes.js")(app);

// Import routes and give the server access to them.
require("./Controllers/reserve_controller.js")(app);


// Start our server so that it can begin listening to client requests.
db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
