const mongoose = require('mongoose')


const userSchema = mongoose.Schema({
        username: {
            // type: String
            type: mongoose.Schema.Types.String,
            required: true
        },
        email: {
             type: mongoose.Schema.Types.String,
             required: true ,
             unique: true
        },
        password: {
            type: mongoose.Schema.Types.String,
            required: true
        }
} , { timestamps: true })

const user = mongoose.model('user' , userSchema)

module.exports = user

    