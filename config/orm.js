// Import MySQL connection.
var connection = require("../config/connection.js");

function printQuestionMarks(num) {
	var arr = [];
  
	for (var i = 0; i < num; i++) {
	  arr.push("?");
	}
  
	return arr.toString();
  }

var orm = {
	selectAll: function(tableName, cb) {
		var sqlQuery = "SELECT * FROM " + tableName + ";";
		connection.query(sqlQuery, function(err, result) {
			if (err) throw err;
			cb(result);
		});
	},
	insertOne: function(tableName, colName, colValue, cb) {
		var sqlQuery = "INSERT INTO " + tableName + " (" + colName.toString() + ") VALUES (" + colValue + ");";
		connection.query(sqlQuery, function(err, result) {
			if (err) throw err;
			cb(result);
		});
	},
	updateOne: function(tableName, colName, colValue, condition, condValue, cb) {
		var sqlQuery = "UPDATE " + tableName + " SET " + colName + " = " + 
			colValue + " WHERE " + condition + " = " + condValue;
		connection.query(sqlQuery, function(err, result) {
			if (err) throw err;
			cb(result);
		});
	}
};

module.exports = orm;