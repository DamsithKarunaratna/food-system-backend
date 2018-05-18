var router = require('express').Router();

router.get('/', (req, res) => {
    foodController.getFoodsFromXML().then(function(data){
        res.json(data);
    }).catch(function(err){
        res.send(err);
    });
});

module.exports = router;