var express = require("express");
var db = require("../models");

var router = express.Router();

router.get("/", function (req, res) {
  db.Burger.findAll({})
    .then(function (data) {
      var burgers = [];
      for (var i = 0; i < data.length; i++) {
        var newBurger = {
          id: 1,
          burger_name: "",
          devoured: false
        }
        newBurger.id = data[i].dataValues.id;
        newBurger.burger_name = data[i].dataValues.burger_name;
        newBurger.devoured = data[i].dataValues.devoured;
        burgers.push(newBurger);
      }
      var hbsObject = {
            burgers: burgers
          };
      console.log(burgers);
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
  db.Burger.update({
    devoured: req.body.devoured
  }, {where: {id: req.params.id}}, function (result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
      window.location = "/";
    }
  });
});

module.exports = router;  