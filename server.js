//REQUIREMENTS
var express = require("express");
var bodyParser = require("body-parser");
//passport and session used for authentification
var passport  = require('passport');
var session = require('express-session');
var models = require("./models");
//environment
var env = require('dotenv').load();
var path = require('path');

////////////////////////////////////////
// initialize express
var app = express();
var PORT = process.env.PORT || 8080;


// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));
//app.use(express.static(__dirname + '/public'));
//app.use('/static', express.static(path.join(__dirname, 'public')));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// For Passport
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
//load passport strategies
require('./config/passport/passport.js')(passport, models.user);

//we won't be using handlebars for now but will change to it in the futre
//the views folder is currently not being used
//the controller folder will hold the api routes (reserve_controllers)
//in the future when we change to handlebars, controllers will monitor the handlebars, and we would not need routes folder anymore
require("./routes/html-routes.js")(app,passport);
require("./routes/api-routes.js")(app,passport);


// Import api routes and give the server access to them.
//require("./routes/api-routes.js")(app);

////////////////////////////////////////
// Synch database and
// Start our server so that it can begin listening to client requests.
// force: false so that tables do not get overwritten each time server restarts
models.sequelize.sync({ force: false }).then(function() {

  app.listen(PORT, function(err) {
  	if(!err){
  		console.log("App listening on PORT " + PORT);
  	}
  	else{
  		console.log(err);
  	}
  });

});
