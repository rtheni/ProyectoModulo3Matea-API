const mongoose = require('mongoose');

const database = require('../database');
const { ObjectID } = require('bson');

const {Schema} = mongoose;

const userSchema = new Schema (
{
    "name": String,
    "lastname": String,
    "email": String,
    "age": String,
    "favSongs": [{type: ObjectID, ref:"Song"}]
}, {collection: 'userList'}
)

let Users = mongoose.model('Users', userSchema);

module.exports = {
    Users
};