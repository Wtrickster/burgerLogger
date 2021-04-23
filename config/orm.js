const connection = require("./connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values

const orm = {
    selectAll: function(table, cb) {
        connection.query("SELECT * FROM ??", [table], function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    insertOne: function(table, tableCol, value, cb) {
        connection.query("INSERT INTO ?? (??) VALUES(?)", [table, tableCol, value], function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    updateOne: function(table, setWithThis, whereCondition, cb) {
        connection.query(`UPDATE ${table} SET ${setWithThis} WHERE ${whereCondition}`, function(err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },
    deleteOne: function(table, condition, cb) {
        let queryString = `DELETE FROM ?? WHERE ${condition}`;

        connection.query(queryString, [table], function(err,result) {
            if (err) throw err;
            cb(result);
        })
    }
}

module.exports = orm;