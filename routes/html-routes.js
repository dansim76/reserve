//if we want to use sequelize and handlebars, the then routes should be controllers
//merge this file into controllers folder controller files

var path = require("path");
var authController = require('../controllers/auth_controller.js');

// Routes
// =============================================================
module.exports = function(app, passport) {

    // Each of the below routes just handles the HTML page that the user gets sent to.

    // reserve route loads reserve.html
    app.get("/", function(req, res) {
        //res.send('Welcome to Passport with Sequelize');
        res.sendFile(path.join(__dirname, "../public/reserve.html"));
    });

    // registration route loads registration.html
    app.get("/signup", authController.signup);

    // login loads login.html
    app.get("/signin", authController.signin);


    app.post("/signup", passport.authenticate('local-signup',{
        successRedirect: '/grocery',
        failureRedirect: '/signup'
    }));

    app.post('/signin', passport.authenticate('local-signin', {
        successRedirect: '/grocery',
        failureRedirect: '/signin'
    }));

    app.get("/logout", authController.logout);


    function isLoggedIn(req, res, next){
        if(req.isAuthenticated())
            return next();
        res.redirect('/signin');
    }

    // grocery route loads grocery.html
    app.get("/grocery", isLoggedIn, authController.grocery);


    // pantry route loads pantry.html
    app.get("/pantry", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/pantry.html"));
    });


};
