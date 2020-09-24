const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://rth:RAFA1472@rthdb.7bsiw.mongodb.net/mateify-m3?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});
const connection = mongoose.connection;

connection.once("open", function() {
    console.log("MongoDB database connection established successfully");
    }   
);

const {Schema} = mongoose;

const userSchema = new Schema (
{
    "name": String,
    "lastname": String,
    "email": String,
    "age": String,
    "favSongs": {}
}, {collection: 'userList'}
)

let Users = mongoose.model('userList', userSchema);

module.exports = {
    Users
};