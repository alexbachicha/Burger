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
    // selectAl()
    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    // insertOne()
    insertOne: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;

        queryString =+ " (";
        queryString =+ cols.toString();
        queryString =+ ") ";
        queryString =+ " VALUES (";
        queryString =+ printQuestionMarks(vals.length);
        queryString =+ ") ";

        console.log(queryString);

        connection.query(querystring, vals, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result); 
        });
    },
    // updateOne()
    updateOne: function(table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table;

        queryString =+ " SET ";
        queryString =+ objtoSql(objColVals);
        queryString =+ " WHERE ";
        queryString =+ condition;

        console.log(queryString);

        connection.query(queryString, id, function(err, res) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    // deleteOne()
    deleteOne: function(table, condition, cb) {
        var queryString = "DELETE FROM " + table + " SET " + condition + " WHERE id = ?";
        connection.query(dbQUery, function(err, res) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }

}

module.exports = orm;