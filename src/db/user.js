const userModal = require("../modal/userModal")

class userDb {
    async get(id) {
        return await userModal.findById(id)
    }
    async create(userData) {
        return await userModal.findById(userData)
    }
    async update(updateData) {

    }

    async delete(id) {

    }
}

module.exports = userDb