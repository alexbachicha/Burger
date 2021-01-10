var connection = require("../config/connection.js");

// Helper function for SQL syntax.
// Let's say we want to pass 3 values into the mySQL query.
// In order to write the query, we need 3 question marks.
// The above helper function loops through and creates an array of question marks - ["?", "?", "?"] - and turns it into a string.
// ["?", "?", "?"].toString() => "?,?,?";
function printQuestionMarks(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objtoSql(ob) {
    var arr = [];

    for (var key in ob) {
       arr.push(key + "=" + ob[key]);
    }
    return arr.toString();
}

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