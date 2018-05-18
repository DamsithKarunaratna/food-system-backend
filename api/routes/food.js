var router = require('express').Router();
var foodService = require('../controllers/food-controller');

router.get('/', function (req, res) {
    foodService.getFoods()
        .then(function (data) {
            res.json(data);
        })
        .catch(function (err) {
            res.send(err);
        });
});

module.exports = router;