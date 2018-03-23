var mongoose = require ("mongoose");
var passportLocalMongoose = require("passport-local-mongoose")


var UserSchema = new mongoose.Schema({
    username: String,
    password: String

});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User",UserSchema)


var orm = require("../config/orm.js");

var stores = {
  all: function(cb) {
    orm.all("stores", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("stores", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("stores", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("stores", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = stores;
