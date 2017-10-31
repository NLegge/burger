// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
	selectAll: function(cb) {
		orm.selectAll("burgers", function(res) {
			cb(res);
		});
	},
	insertOne: function(colName, colValue, cb) {
    orm.create("burgers", colName, colValue, function(res) {
      cb(res);
    });
  },
	updateOne: function(condValue, cb) {
		orm.updateOne("burgers", "devoured", "true", "id", condValue, function(res) {
			cb(res);
		});
	}
};

// Export the database functions for the controller.
module.exports = burger;