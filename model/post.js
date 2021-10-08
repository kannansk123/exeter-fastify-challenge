const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    student_name: {
        type: String,
        required: true
    },
    subject1: {
        type: Number,
        required: true
    },
    subject2: {
        type: Number,
        required: true
    },
    subject3: {
        type: Number,
        required: true
    },
    subject4: {
        type: Number,
        required: true
    },
    subject5: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('POST', postSchema)
