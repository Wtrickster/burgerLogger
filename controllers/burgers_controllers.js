const express = require("express");
const router = express.Router();

const burger = require("../models/burger");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    burger.all(function(data){
        let burgerObject = {
            burgers: data
        };
        res.render("index", burgerObject);
    });
    
    // });
  });

router.post("/api/burgers", function(req, res) {

    burger.create(req.body.name, function(result){
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function(req, res) {
    // console.log(req.params.id);
    // console.log(req.body.devour);
    devouredIsTrue = `devoured = ${req.body.devour}`;
    atThisId = `id = ${req.params.id}`;
    
    // console.log()
    burger.devour(devouredIsTrue, atThisId, function(result) {
        if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete("/api/burgers/:id", function(req, res) {
    // console.log("Burger Deleted ID: " + req.params.id);
    let condition = "id = " + req.params.id;

    burger.delete(condition, function(result) {
        console.log(result)
        if (result.affectedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
        } else {
        res.status(200).end();
        }
    });
});
  
// Export routes for server.js to use.
module.exports = router;