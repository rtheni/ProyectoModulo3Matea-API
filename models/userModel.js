const mongoose = require('mongoose');

const database = require('../database');

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