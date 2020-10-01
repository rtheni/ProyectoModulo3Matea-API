const songCollection = require('../models/songModel');

const listAllSongs = async (req, res) => {
    songCollection.listAllSongs(req, res)
};

const addSong = async (req, res) => {
    songCollection.addSong(req, res)
};

const modifySong = async (req, res) => {
    songCollection.modifySong(req, res)
};

const deleteSong = async (req, res) => {
    songCollection.deleteSong(req, res)
};

const listFavSongs = async (req, res, user) => {
    songCollection.listFavSongs(req, res)
};

module.exports = {
    listFavSongs,
    listAllSongs,
    addSong,
    modifySong,
    deleteSong
};