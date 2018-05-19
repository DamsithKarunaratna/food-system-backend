var fs = require('fs');
var Parser = require('xml2js').Parser;
var Builder = require('xml2js').Builder;

/**
 * @author Damsith
 */
module.exports.readXMLAsync = (filename) => {

    var XMLparser = new Parser({ explicitArray: false });

    return new Promise(function (resolve, reject) {
        fs.readFile(__dirname + '/../data' + filename, function (err, data) {
            XMLparser.parseString(data, function (err, result) {
                if (err) reject(err);
                else resolve(result);
            });
        });
    });
}

/**
 * @author Damsith
 */
module.exports.writeXMLAsync = (filename, obj) => {

    var XMLBuilder = new Builder();
    return new Promise(function (resolve, reject) {
        var xml = XMLBuilder.buildObject(obj);
        fs.writeFile(__dirname + '/../data' + filename, xml, function (err) {
            if (err) reject(err);
            else resolve("data added");
        });
    });

}