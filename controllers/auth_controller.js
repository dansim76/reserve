var path = require("path");
var exports = module.exports = {};


exports.signup = function(req,res){
	//res.render('signup'); 
	res.sendFile(path.join(__dirname, "../public/signup.html"));
}

exports.signin = function(req,res){
	//res.render('signin'); 
	res.sendFile(path.join(__dirname, "../public/signin.html"));
}

exports.grocery = function(req,res){
	//need to render based on whether it is grocery or bank 
	res.sendFile(path.join(__dirname, "../public/grocery.html"));
}

exports.logout = function(req, res){
	req.session.destroy(function(err){
		res.redirect('/');
	});
}

