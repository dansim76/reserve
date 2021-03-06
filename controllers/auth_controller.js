var path = require("path");
var exports = module.exports = {};


exports.home = function(req,res){
	res.sendFile(path.join(__dirname, "../public/home.html"));
}

exports.reserve = function(req,res){
	res.sendFile(path.join(__dirname, "../public/reserve.html"));
}

exports.about = function(req,res){
	res.sendFile(path.join(__dirname, "../public/about.html"));
}

exports.signup = function(req,res){
	//res.render('signup');
	res.sendFile(path.join(__dirname, "../public/signup.html"));
}

exports.signin = function(req,res){
	//res.render('signin');
	res.sendFile(path.join(__dirname, "../public/signin.html"));
}

exports.grocery = function(req,res){
	res.sendFile(path.join(__dirname, "../public/grocery.html"));
}

exports.pantry = function(req,res){
	res.sendFile(path.join(__dirname, "../public/pantry.html"));
}

exports.pantryReserved = function(req,res){
	res.sendFile(path.join(__dirname, "../public/pantryReserved.html"));
}

exports.logout = function(req, res){
	req.session.destroy(function(err){
		res.redirect('/');
	});
}

