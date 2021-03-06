var express = require('express');
var db = require('../models');

var router = express.Router();

router.get('/', function(req, res) {
  db.Burger.findAll({}).then(function(data) {
    var hbsObject = {
      burgers: data,
    };
    res.render('index', hbsObject);
  });
});

router.post('/api/burgers', function(req, res) {
  db.Burger.create({
    burger_name: req.body.burger_name,
  }).then(function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put('/api/burgers/:id', function(req, res) {
  db.Burger.update(
    {
      devoured: req.body.devoured,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  ).then(function(result) {
    //   console.log('LOOOOK IM HEEEEEEEEEEEERE!!!!!!!!!!!')
    //   if (result.changedRows == 0) {
    //     // If no rows were changed, then the ID must not exist, so 404
    //     return res.status(404).end();
    //   } else {
    //     // res.json(result);
    res.json('/');
    //     // console.log("This is the" + result);
    //     // res.status(200).end();
    //   }
  });
});

module.exports = router;
