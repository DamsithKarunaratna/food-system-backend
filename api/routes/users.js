var router = require('express').Router();
var userService = require('../controllers/user-controller');

router.get('/', function (req, res) {
    userService.getUsers()
        .then(function (data) {
            res.json(data);
        })
        .catch(function (err) {
            res.send(err);
        });
});

router.post('/add', function (req, res) {
    user = { "username": "NEW", "password": "123" };
    userService.addUser(user)
        .then(function (data) {
            res.send(data);
        })
        .catch(function (err) {
            res.send(err);
        });
});

module.exports = router;