var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: false
    },
    surname: {
        type: String,
        required: true,
        unique: false
    },
    dob: {
        type: String,
        required: true,
        unique: false
    },
    age: {
        type: Number,
        required: true,
        unique: false
    }
});

var patient = new mongoose.model('Patient', schema);

module.exports = patient;