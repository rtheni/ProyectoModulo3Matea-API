const songCollection = require('../models/songModel');

const listAllSongs = async (req, res) => {
    const songList = await songCollection.Songs.find()
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
        songCollection.Songs.create(req.body);
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
        if(await songCollection.Songs.findOneAndUpdate(query, 
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
            res.status(400).send("No existe una canción con ese nombre en esta base de datos.")
        )
    } else {
        res.status(400).send("El formato de la canción es incorrecto.");
    }
};

const deleteSong = async (req, res) => {
    const name = req.params.song;
    var query ={name : name}
    if (await songCollection.Songs.deleteOne(query)) {
        res.send("Canción eliminada.");
    } else {
        res.status(400).send("No se puede encontrar una cancion con ese nombre.");
    }
};

const listFavSongs = async (req, res, user) => {
    const songList = await songCollection.Songs.find(user)
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
    deleteSong
};