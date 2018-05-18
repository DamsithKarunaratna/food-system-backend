var readXMLAsync = require('../helpers/XMLService').readXMLAsync;

module.exports.getFoods = () => {
    return readXMLAsync('/food-store.xml');
}