//if we want to use sequelize and handlebars, the then routes should be controllers
//merge this file into controllers folder controller files

var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // reserve route loads reserve.html
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/reserve.html"));
    });

    // grocery route loads grocery.html
    app.get("/grocery", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/grocery.html"));
    });

    // pantry route loads pantry.html
    app.get("/pantry", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/pantry.html"));
    });

    // registration route loads registration.html
    app.get("/registration", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/registration.html"));
    });

    // login loads login.html
    app.get("/login", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/login.html"));
    });

};
