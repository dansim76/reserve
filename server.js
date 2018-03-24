var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 8080;

var db = require("./models");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));


require("./routes/html-routes.js")(app);

// Import routes and give the server access to them.
require("./Controllers/reserve_controller.js")(app);


// Start our server so that it can begin listening to client requests.
db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
