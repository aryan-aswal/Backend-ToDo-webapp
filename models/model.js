const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    title: {
        type: String,
        maxLength: 20,
        required: true,
    },
    description: {
        type: String,
        maxLength: 50,
        required: true,
    },
    entryAt: {
        type: Date,
        required: true,
        default: Date.now(),
    }
})

module.exports = mongoose.model("todo", schema);