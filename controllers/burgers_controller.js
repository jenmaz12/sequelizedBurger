var express = require("express");
var db = require("../models");

var router = express.Router();

router.get("/", function (req, res) {
  db.Burger.findAll({})
    .then(function (data) {
        var hbsObject = {
            burgers: data
          };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function (req, res) {
  db.Burger.create({
    burger_name: req.body.burger_name,
  }).then(function (result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
    
  });
});

router.put("/api/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  db.Burger.update({
    devoured: req.body.devoured
  }, condition, function (result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;  