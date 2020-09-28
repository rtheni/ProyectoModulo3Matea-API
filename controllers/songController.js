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

const listFavSongs = async (req, res, user) => {
    const songList = await songCollection.Canciones.find(user)
    if (songList.length >= 1){
    res.send(songList)
    }
    else{
        res.status(400).send("No existen canciónes en esta base de datos.");
    }
};

module.exports = {
    listFavSongs,
    listAllSongs
};