const userModal = require("../modal/userModal")

class userDb {
    async get(id) {
        return await userModal.findById(id)
    }

    async getByquery(query) {
        return await userModal.find(query)
    }
    async create(createData) {
        return await userModal.create(createData)
    }
    async update(updateData) {

    }

    async delete(id) {

    }
}

module.exports = userDb