
const userDB = require('../db/user');
const { UserSchema } = require('../util/schema/userSchema');
const util = require('../util/util');
class userService {
    constructor() {
        this.userDB = new userDB()
    }

    async getUser({ id }) {
        try {
            const user = await this.userDB.get(id);
            return user;
        } catch (error) {
            throw error
        }
    }

    async createUser(userData) {
        try {
            // TODO: convert email to lower case before db call 
            if (userData.email && (await this.userDB.getByquery({ email: userData.email }))?.length) {
                throw { code: 'duplicate-email', message: `This email is already exist ${userData.email}` }
            }
            if (userData.phoneNumber && (await this.userDB.getByquery({ phoneNumber: userData.phoneNumber }))?.length) {
                throw { code: 'duplicate-phones-number', message: `This email is already exist ${userData.phoneNumber}` }
            }
            const user = await this.userDB.create(new UserSchema(userData));
            return util.responseFormate(user);
        } catch (error) {
            throw error
        }
    }

    async userLogin(loginData) {
        try {
            let userData
            // TODO: convert email to lower case before db call 
            if (loginData.email) {
                userData = (await this.userDB.getByquery({ email: loginData.email }))?.[0]
            } else if (loginData.phoneNumber) {
                userData = (await this.userDB.getByquery({ phoneNumber: loginData.phoneNumber }))?.[0];
            }
            if (!userData) throw { httpCode: 404, code: 'user-not-found', message: loginData.email ? `This email ${loginData.email}  does not exist` : `This phoneNumber ${loginData.phoneNumber} does not exist` }
            if (!(util.verifyPassword({ ...userData.password, password: loginData.password }))) {
                throw { httpCode: 400, code: 'invalide-password', message: `Invalid password` }
            }
            return util.responseFormate(userData);
        } catch (error) {
            throw error
        }
    }
}

module.exports = userService;