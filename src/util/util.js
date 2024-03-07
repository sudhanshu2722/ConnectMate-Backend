const crypto = require('crypto');
const JWT = require('jsonwebtoken');
const Config = require('../config/config');

function generatPasswordeHash(password, salt = null) {
    try {
        if (!salt) salt = crypto.randomBytes(16);
        salt = salt.toString('base64');
        const hash = crypto.createHmac('sha512', salt);
        hash.update(password);
        const value = hash.digest('hex');
        return {
            salt: salt,
            hash: value
        };

    } catch (error) {
        console.error(`Error in generatPasswordeHash`, error);
    }
}

function customsAuthTokens(payLoad = {}) {
    const access_token = JWT.sign(payLoad, Config.jwt.secret, { expiresIn: Config.jwt.accessTokenExpiresIn, issuer: Config.jwt.issuer });
    const refresh_token = JWT.sign(payLoad, Config.jwt.secret, { expiresIn: Config.jwt.refreshTokenExpiresIn, issuer: Config.jwt.issuer });
    const accessTokenDecoded = JWT.decode(access_token);

    return ({
        accessToken: access_token,
        refreshToken: refresh_token,
        expirationTime: accessTokenDecoded['exp']
    });
}

function verifyPassword({ hash, salt, password }) {
    if (hash && salt) {
        const passwordDetails = generatPasswordeHash(password, salt);
        if (hash !== passwordDetails.hash) {
            return false
        }
        return true;
    }
    return false
}

function responseFormate(userData) {
    const response = {
        uid: userData._id,
        email: userData.email,
        countryCode: userData.countryCode,
        phoneNumber: userData.phoneNumber,
        name: userData.name,
        address: userData.address ?? {},
    }
    response.authToken = customsAuthTokens({ uid: userData._id })
    return response;
}

module.exports = { generatPasswordeHash, responseFormate, verifyPassword }