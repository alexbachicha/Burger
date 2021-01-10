var connection = require("../config/connection.js");

// Helper function
// function printQuestionMarks(num) {
//     var arr = [];
//     for(var i = 0; i < num; i++) {
//         arr.push("?");
//     }
//     return arr.toString();
// }

// function objToSql(obj) {
//     var arr = [];
//     for (var key in ob) {
//         var value = ob[key];
//         if (Object.hasOwnProperty.call(ob, key)) {
//             if (typeof value === "string" && value.indexOf(" ") >= 0) {
//                 value = "'" + value + "'" ;
//             }
//             arr.push(key + "=" + value)
//         }
//     }
//     return arr.toString();
// }


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
        // queryString += " ("; 
        // queryString += cols.toString();
        // queryString += ") ";
        // queryString += "VALUES (";
        // queryString += printQuestionMarks(vals.length)
        // queryString += ") ";
        connection.query(querystring, value, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    updateOne: function(table, condition, id, cb) {
        var queryString = "UPDATE " + table + " SET " + condition + " WHERE id = ?";
        // queryString += " SET ";
        // queryString += objToSql(objColVals);
        // queryString += " WHERE ";
        // queryString += condition;
        connection.query(queryString, id, function(err, res) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    // deleteOne: function(table, condition, cb) {
    //     var queryString = "DELETE FROM " + table;
    //     queryString += " WHERE ";
    //     queryString += condition;

    //     console.log(queryString);

    //     connection.query(dbQUery, function(err, res) {
    //         if (err) {
    //             throw err;
    //         }
    //         cb(res);
    //     });
    // }

}

module.exports = orm;