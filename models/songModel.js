const mongoose = require('mongoose');

const database = require('../database');

const {Schema} = mongoose;

const songSchema = new Schema (
{
    "name": String,
    "album": String,
    "duration": String,
    "artist": String
}, {collection: 'songList'}
)

let Songs = mongoose.model('Songs', songSchema);

module.exports = {
    Songs
};