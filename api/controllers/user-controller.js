var readXMLAsync = require('../helpers/XMLService').readXMLAsync;
var writeXMLAsync = require('../helpers/XMLService').writeXMLAsync;

/**
 * @author Damsith
 */
module.exports.getUsers = () => {
    return readXMLAsync('/user-store.xml');
}

module.exports.getUser = (username) => {
    return new Promise(function(resolve, reject) {
        readXMLAsync('/user-store.xml').then(function (xmlObj) {
            
            console.log("username : " + username);
            xmlObj.data.user.forEach(user => {
                if (user.username === username) {
                    resolve(user);
                }
            });
            reject("User not found");
        }).catch(function (err) {
            console.log(err);
            reject(err);
        });
    });
}

/**
 * @author Damsith
 */
module.exports.addUser = (user) => {
    return new Promise(function (resolve, reject) {
        readXMLAsync('/user-store.xml').then(function (xmlObj) {

            if (xmlObj.data.user.filter(function (u) { return u.username === user.username; }).length > 0) {
                console.log("User already in database");
                reject("User already in database");
            } else {
                xmlObj.data.user.push(user);
                writeXMLAsync('/user-store.xml', xmlObj)
                    .then(function (data) {
                        resolve(data);
                    })
                    .catch(function (err) {
                        reject(err);
                    });
            }
        }).catch(function (err) {
            console.log(err);
            reject(err);
        });
    });
}