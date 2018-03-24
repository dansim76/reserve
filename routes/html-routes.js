//if we want to use sequelize and handlebars, the then routes should be controllers
//merge this file into controllers folder controller files

var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/assets/reserve.html"));
    });

    // cms route loads cms.html
    app.get("/grocery", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/assets/grocery.html"));
    });

    // blog route loads blog.html
    app.get("/pantry", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/assets/pantry.html"));
    });

    // authors route loads author-manager.html
    app.get("/registration", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/assets/registration.html"));
    });

    app.get("/login", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/assets/login.html"));
    });

};
