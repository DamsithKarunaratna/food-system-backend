var router = require('express').Router();
var foodService = require('../controllers/food-controller');

/**
 * @author Damsith
 */
router.get('/', function (req, res) {
    foodService.getFoods()
        .then(function (foods) {
            res.json(foods.data.food);
        })
        .catch(function (err) {
            res.send(err);
        });
});

module.exports = router;