var mongoose = require('mongoose');
var patient = mongoose.model('Patient');
var ObjectId = require('mongoose').Types.ObjectId

exports.createPatient = function (data, callback) {
    patient.create(data).then((response) => {
        callback(null, response);
    }, (error) => {
        callback(error, null);
    });
};

exports.getPatients = function (query, callback) {
    patient.find({}, callback);
}

exports.deletePatient = function (query, callback) {
    patient.deleteOne({_id: ObjectId(query)}, callback);
}