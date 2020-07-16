var patientService = require('../service/patient')

exports.create = function (req, res, next) {
    var body = new Patient(req.body);
    if (!body.name) {
        res.status(400).send('User name is missing');
        return;
    }
    patientService.createPatient(body, function (error, response) {
        if (response) {
            res.status(201).send(response);
        } else if (error) {
            res.status(400).send(error);
        }
    });
}

exports.getAllPatients = function (req, res) {
    patientService.getPatients('', function (error, response) {
        if (error) {
            res.status(404).error(error);
            return;
        }
        if (response) {
            res.status(200).send(response);
            return;
        }
        if (!response) {
            res.status(204).send('No patients found.');
        }
    });
}

exports.delete = function (req, res) {
    var body = req.body || {};
    var query = body.id;

    if (!query) {
        res.status(400).send('Bad Request');
        return;
    }
    patientService.deletePatient(query, function (error, response) {
        if (error) {
            res.status(400).send(error);
            return;
        }
        if (response) {
            if (response.n === 1 && response.ok === 1) {
                res.status(202).send(body);
            }
            if (response.n === 0 && response.ok === 1) {
                res.status(204).send({
                    message: 'No data found'
                });
            }
        }
    });
}

class Patient {
    constructor(patientData) {
        this.name = patientData.name || ''
        this.surname = patientData.surname || ''
        this.age = patientData.age || ''
        this.dob = patientData.dob || ''
    }
}