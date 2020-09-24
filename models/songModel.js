const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://rth:RAFA1472@rthdb.7bsiw.mongodb.net/mateify-m3?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});
const connection = mongoose.connection;

connection.once("open", function() {
    console.log("MongoDB database connection established successfully");
    }   
);

const {Schema} = mongoose;

const songSchema = new Schema (
{
    "name": String,
    "album": String,
    "duration": String,
    "artist": String
}, {collection: 'songList'}
)

let Songs = mongoose.model('songList', songSchema);

module.exports = {
    Songs
};