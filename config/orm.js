var connection = require("../config/connection.js");

var orm = {
    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    insertOne: function(table, value, cb) {
        var queryString = "INSERT INTO " + table + " SET ?";
        connection.query(querystring, value, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    updateOne: function(table, condition, id, cb) {
        var queryString = "UPDATE " + table + " SET " + condition + " WHERE id = ?";
        connection.query(queryString, id, function(err, res) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    // deleteOne: function(table, condition, cb) {
    //     var queryString = "DELETE FROM " + table + " SET " + condition + " WHERE id = ?";
    //     connection.query(dbQUery, function(err, res) {
    //         if (err) {
    //             throw err;
    //         }
    //         cb(result);
    //     });
    // }

}

module.exports = orm;