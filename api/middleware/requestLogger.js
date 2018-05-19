/**
 * @author Damsith
 */
module.exports.myLogger = function (req, res, next) {
    console.log( '\x1b[36m%s\x1b[0m%s', 'Food API request : ', req.method + ' ' + req.protocol + '://' + req.get('host') + req.originalUrl);
    next()
  }