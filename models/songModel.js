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

const listAllSongs = async (req, res) => {
    const songList = await Songs.find()
    if (songList.length >= 1){
        res.send(songList)
    }
    else{
        res.status(400).send("No existen canciones en esta base de datos.");
    }
};

const validSong = (song) => {
    if (song.name && song.artist && song.duration) {
        return true;
    }
    return false;
};

const addSong = async (req, res) => {
    const song = req.body;
    if (validSong(song)) {
        Songs.create(req.body);
        res.json(req.body);
    } else {
        res.status(400).send("El formato de la canción es incorrecto")
    }
};

const modifySong = async (req, res) => {
    const song = req.body;
    const name = req.params.song;
    var query ={name : name}
    if (validSong(song)) {
        if(await Songs.findOneAndUpdate(query, 
                {    
                album: song.album,
                artist: song.artist, 
                duration: song.duration
                }
            )
            )
        {
            res.json(req.body)
        }
        else(
            res.status(400).send("No existe una canción con el nombre " + name + " en esta base de datos.")
        )
    } else {
        res.status(400).send("El formato de la canción es incorrecto.");
    }
};

const deleteSong = async (req, res) => {
    const name = req.params.song;
    var query ={name : name}
    if (await Songs.deleteOne(query)) {
        res.send("Canción eliminada.");
    } else {
        res.status(400).send("No se puede encontrar una cancion con el nombre " + name + ".");
    }
};

const listFavSongs = async (req, res, user) => {
    const songList = await Songs.find(user)
    if (songList.length >= 1){
    res.send(songList)
    }
    else{
        res.status(400).send("No existen canciónes en esta base de datos.");
    }
};

module.exports = {
    listFavSongs,
    listAllSongs,
    addSong,
    modifySong,
    deleteSong,
    Songs
};