const userCollection = require('../models/userModel');
const songCollection = require('../models/songModel');
const { Mongoose } = require('mongoose');

const listAllUsers = async (req, res) => {
    const userList = await userCollection.Users.find()
    if (userList.length >= 1){
        res.send(userList)
    }
    else{
        res.status(400).send("No existen usuarios en esta base de datos.");
    }
};

const validUser = (user) => {
    if (user.name && user.lastname && user.email && user.age) {
        return true;
    }
    return false;
};

const addUser = async (req, res) => {
    const user = req.body;
    if (validUser(user)) {
        userCollection.Users.create(req.body);
        res.json(req.body);
    } else {
        res.status(400).send("El formato del Usuario es incorrecto.")
    }
};

const addFavSongToUser = async (req, res) => {
    const userName = req.params.user;
    const songName = req.params.song;
    const song = await songCollection.Songs.findOne({name: songName});
    const user = await userCollection.Users.findOne({name: userName});
    console.log("song", song);
    console.log("user", user);
    if(song == null){
        res.status(400).send("La canción " + songName + " no existe en esta base de datos.")
    }
    else if(user == null){
        res.status(400).send("El usuario " + userName + " no existe en esta base de datos.")
    }
    else{
        await userCollection.Users.findOneAndUpdate({name : userName}, 
            { $addToSet:{
                favSongs : song.id
            }}
        )
        res.send("La canción " + songName +  " ha sido agregada a la lista del usuario " + userName)
    }
};

const deleteFavSongOfUser = async (req, res) => {
    const userName = req.params.user;
    const songName = req.params.song;
    const song = await songCollection.Songs.findOne({name: songName});
    const user = await userCollection.Users.findOne({name: userName});
    console.log("song", song);
    console.log("user", user);
    if(song == null){
        res.status(400).send("La canción " + songName + " no existe en esta base de datos.")
    }
    else if(user == null){
        res.status(400).send("El usuario " + userName + " no existe en esta base de datos.")
    }
    else{
        await userCollection.Users.findOneAndUpdate({name : userName}, 
            { $pull:{
                favSongs : song.id
            }}
        )
        res.send("La canción " + songName +  " ha sido eliminada de la lista del usuario " + userName)
    }
}

const modifyUser = async (req, res) => {
    const user = req.body;
    const name = req.params.user;
    var query ={name : name}
    if (validUser(user)) {
        if(await userCollection.Users.findOneAndUpdate(query, 
                {    
                lastname: user.lastname,
                email: user.email,
                age: user.age
                }
            )
            )
        {
            res.json(req.body)
        }
        else(
            res.status(400).send("No existe un Usuario con ese nombre en esta base de datos.")
        )
    } else {
        res.status(400).send("El formato del Usuario es incorrecto.");
    }
};

const deleteUser = async (req, res) => {
    const name = req.params.user;
    var query ={name : name}
    if (await userCollection.Users.deleteOne(query)) {
        res.send("Usuario eliminado.");
    } else {
        res.status(400).send("No se puede encontrar un Usuario a eliminar con ese nombre.");
    }
};

module.exports = {
    listAllUsers,
    addUser,
    modifyUser,
    deleteUser,
    addFavSongToUser,
    deleteFavSongOfUser
};