const signUpReqModal = require("../modal/signUpReqModal")

class signUpReqDb {

    async get(id) {
        return await signUpReqModal.findById(id)
    }

    async getByquery(query) {
        return await signUpReqModal.find(query)
    }
    async create(createData) {
        return await signUpReqModal.create(createData)
    }

    async update(id, updateData) {
        return await signUpReqModal.updateOne({ _id: id }, { $set: { ...updateData } });
    }

    async delete(id) {

    }
}

module.exports = signUpReqDb