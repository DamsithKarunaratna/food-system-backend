module.exports.myLogger = function (req, res, next) {
    console.log( 'API request : ' + req.protocol + '://' + req.get('host') + req.originalUrl)
    next()
  }