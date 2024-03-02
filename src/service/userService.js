
const userDB = require('../db/user')

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
            const createUserData = {
                "email": userData.email ?? "",
                "countryCode": userData.countryCode ?? "+91",
                "phoneNumber": userData.phoneNumber ?? "",
                "password": userData.password ? { salt: "ww121", hash: "sasasassw" } : { salt: "ww121", hash: "sasasassw" },
                "name": userData.name ?? "",
            }
            const user = await this.userDB.create(createUserData);
            return user;
        } catch (error) {
            throw error
        }
    }
}

module.exports = userService;