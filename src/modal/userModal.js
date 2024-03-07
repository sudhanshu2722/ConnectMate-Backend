const { string } = require('joi');
const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        default: 'hahaha'
    },
    age: {
        type: Number,
        index: true
    },
    countryCode: {
        type: String,
        length: 3,
    },
    phoneNumber: {
        type: Number,
        length: 10,
        match: /[1-9]/,
        index: true,
        unique:true
    },
    password: {
        type: Object
    },
    email: {
        type: String,
        index: true,
        unique:true
    },
    createAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
}, { versionKey: false });



const userModal = mongoose.model('userSchema', userSchema);

module.exports = userModal;