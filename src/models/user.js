const mongoose = require("mongoose");
const Shema = mongoose.Schema

const User = new Schema({
    name: String,
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('user', User)