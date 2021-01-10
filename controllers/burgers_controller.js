// Dependencies
var express = require("express");

// Import model
var burger = require("../models/burger.js");

// Create the router and export the router at the end of the app
var router = express.Router();

// Routes
// Index
router.get("/", function(req, res) {
    res.redirect("/burgers");
})

// GET
router.get("/burgers", function(req, res) {
    burger.selectAll(function(burgerData) {
        res.render("index", { burger_data: burgerData});
    });
    // burger.selectAll(function(data) {
    //     var hbsObject = {
    //         burger: data
    //     };
    //     console.log(hbsObject);
    //     res.render("index", hbsObject);
    // });
});

// POST
router.post("/burgers/create", function(req, res) {
    burger.create(req.body.burger_name, function(result) {
        console.log(result);
        res.redirect("/");
        // res.json({ id: result.insertId });
    });
});

// PUT
router.put("/burgers/:id", function(req, res) {
    burger.updateOne(req.params.id, function(result) {
        console.log(result);
        res.sendStatus(200);
    });
    // var condition = "id = " + req.params.id;

    // burger.update(
    //     { 
    //         devoured: req.body.devoured 
    //     }, condition, function(result) {
    //     if (result.changedRows === 0) {
    //         return res.status(404).end();
    //     } else {
    //         res.status(200).end();
    //     }
    // })
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


