var router = require('express').Router();
var userService = require('../controllers/user-controller');
var authenticator = require('../middleware/authenticator').authenticator;

router.use(authenticator);

/**
 * @author Damsith
 */
router.get('/', function (req, res) {
    userService.getUsers()
        .then(function (users) {
            res.json(users.data.user);
        })
        .catch(function (err) {
            res.send(err);
        });
});

/**
 * @author Damsith
 */
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