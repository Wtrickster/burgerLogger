const orm = require("../config/orm");

const burger = {
    all: function(cb) {
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },
    create: function(userBurger, cb) {
        orm.insertOne("burgers", "burger_name", userBurger, function(res){
            cb(res);
        });
    },
    devour: function(setNewValue, matchedCondition, cb) {
        // console.log(setNewValue);
        // console.log(matchedCondition);
        orm.updateOne("burgers", setNewValue, matchedCondition, function(res){
            cb(res);
        });
    },
    delete: function(condition, cb) {
        // console.log("Condition sent to burger js: " + condition);
        orm.deleteOne("burgers", condition, function(res) {
            cb(res);
        });
    }
}

module.exports = burger;