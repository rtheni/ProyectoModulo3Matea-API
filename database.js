const mongoose = require('mongoose');

const connection = mongoose.connection;

connection.once("open", function() {
    console.log("MongoDB database connection established successfully");
    }   
);

module.exports = mongoose.connect('mongodb+srv://rth:RAFA1472@rthdb.7bsiw.mongodb.net/mateify-m3?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});