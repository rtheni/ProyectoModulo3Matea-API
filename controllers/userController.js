const userCollection = require('../models/userModel');

const listAllUsers = async (req, res) => {
    userCollection.listAllUsers(res, res);
};

const addUser = async (req, res) => {
    userCollection.addUser(req, res)
};

const addFavSongToUser = async (req, res) => {
    userCollection.addFavSongToUser(req, res)
};

const deleteFavSongOfUser = async (req, res) => {
    userCollection.deleteFavSongOfUser(req, res)
}

const modifyUser = async (req, res) => {
    userCollection.modifyUser(req, res)
};

const deleteUser = async (req, res) => {
    userCollection.deleteUser(req, res)
};

module.exports = {
    listAllUsers,
    addUser,
    modifyUser,
    deleteUser,
    addFavSongToUser,
    deleteFavSongOfUser
};