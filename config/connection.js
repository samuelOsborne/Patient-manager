const mongoose = require('mongoose')

var URL = 'mongodb://mongo/patient_db';

mongoose.set('useCreateIndex', true);

mongoose.set('useFindAndModify', false);

mongoose.connect(URL, {
    useNewUrlParser: true,
    useCreateIndex: true
});

// Models
require('../model/patient');
var db = mongoose.connection;

// We enebled the Listener
db.on('error', () => {
    console.error('Error occured in db connection');
});

db.on('open', () => {
    console.log('DB Connection established successfully');
});