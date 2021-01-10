// Dependencies
var express = require("express");

// Import model
var burger = require("../models/burger.js");

// Create the router and export the router at the end of the app
var router = express.Router();

// Routes
// GET
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});
// POST
router.post("/api/burgers", function(req, res) {
    burger.create(req.body.burger_name, function(result) {
        res.json({ id: result.insertId });
    })
});
// PUT
router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    burger.update(
        { 
            devoured: req.body.devoured 
        }, condition, function(result) {
        if (result.changedRows === 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    })
});
// DELETE
router.delete("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.delete(
        condition, function(result) {
        if (result.changedRows === 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    })
});

// Export
module.exports = router;


