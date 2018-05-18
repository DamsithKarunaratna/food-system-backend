var fs = require('fs');
var Parser = require('xml2js').Parser;
var Builder = require('xml2js').Builder;

module.exports.getFoodsFromXML = () => {

    var XMLparser = new Parser({explicitArray: false});

    return new Promise(function(resolve, reject) {
        fs.readFile(__dirname + '/food-store.xml', function (err, data) {
            console.log("data : " + data)
            XMLparser.parseString(data, function (err, result) {
                if(err) reject(err);
                else resolve(result);
            });
        });
    });

    

}