const mongoose = require('mongoose')

const fanSchema = new mongoose.Schema(
    {
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
},
 {timestamps:true}
)


module.exports = mongoose.model('fan',fanSchema)