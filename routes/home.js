const express = require('express')
const app = express()
var patient = require('../controller/patient')

/**
 * Retrieve all patients
 */
app.get('/', patient.getAllPatients)

/**
 * Create a new patient
 */
app.post('/', patient.create)


/**
 * Delete an existing patient
 */
app.delete('/', patient.delete)

module.exports = app;
