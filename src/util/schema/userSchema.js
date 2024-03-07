const util = require("../util");
function UserSchema({ email = "", countryCode = "+91", phoneNumber = "", password = "", name = "", address = {} }) {
    this.email = email;
    this.countryCode = countryCode;
    this.phoneNumber = phoneNumber;
    this.password = password ? util.generatPasswordeHash(password) : {};
    this.name = name;
    this.address = address ?? {};
}

module.exports = { UserSchema }