
//calling dependencies
var path = require("path");
var exports = module.exports = {};

//homepage without the intro 
exports.home = function(req,res){
	res.sendFile(path.join(__dirname, "../public/home.html"));
}
//homepage with the intro
exports.reserve = function(req,res){
	res.sendFile(path.join(__dirname, "../public/reserve.html"));
}
//controller to signup page
exports.signup = function(req,res){
	res.sendFile(path.join(__dirname, "../public/signup.html"));
}
//controller to signin page
exports.signin = function(req,res){
	res.sendFile(path.join(__dirname, "../public/signin.html"));
}
//congtroller to the grocery page
exports.grocery = function(req,res){
	res.sendFile(path.join(__dirname, "../public/grocery.html"));
}
//controller to the pantry page
exports.pantry = function(req,res){
	res.sendFile(path.join(__dirname, "../public/pantry.html"));
}
//controller to the logout function
exports.logout = function(req, res){
	req.session.destroy(function(err){
		res.redirect('/');
	});
}

