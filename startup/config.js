const config = require('config');

module.exports = function() {
    if (!config.get('jwtprivatekey')) {
        throw new Error('FATAL ERROR: JwtPrivateKey is not defined !');
    }
};