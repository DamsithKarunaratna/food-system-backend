var readXMLAsync = require('../helpers/XMLService').readXMLAsync;

/**
 * @author Damsith
 */
module.exports.getFoods = () => {
    return readXMLAsync('/food-store.xml');
}