var connection = require("../config/connection");


function printQuestionMarks(num) {
    var arr = [];
    for(var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

function objToSql(obj) {
    var arr = [];
    for (var key in ob) {
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'" ;
            }
            arr.push(key + "=" + value)
        }
    }
    return arr.toString();
}


var orm = {
    selectAll: function(table, cb) {
        var queryString = "SELECT * FROM " + table + ";";

        connection.query(queryString, function(err, res) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    insertOne: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;
        queryString += " ("; 
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length)
        queryString += ") ";

        console.log(queryString);

        connection.query(querystring, vals, function(err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },

    updateOne: function(table, objColVals, condition, callback) {
        var queryString = "UPDATE " + table 
        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);

        connection.query(queryString, function(err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },

    deleteOne: function(table, condition, cb) {
        var queryString = "DELETE FROM " + table;
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);

        connection.query(dbQUery, function(err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    }

}

module.exports = orm;