var router = require('express').Router();
var jwt = require('jsonwebtoken');
var userService = require('../controllers/user-controller');


const SECRET = "secretsauce";


/**
 * @author Damsith
 */


router.post('/', function (req, res) {
    userService.getUser(req.body.username)
        .then(function (user) {
            if (user.password !== req.body.password) {
                res.send("password incorrect");
            } else {

                const payload = {
                    admin: user.admin
                };



                var token = jwt.sign({ data: payload }, SECRET, { expiresIn: '1d' });
                console.log("TOKEN : " + token);

                res.json({
                    success: true,
                    message: 'Enjoy your token!',
                    token: token
                });

            }
        })
        .catch(function (err) {
            res.send(err);
        });
});

module.exports = router;