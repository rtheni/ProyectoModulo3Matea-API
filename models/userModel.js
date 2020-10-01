const mongoose = require('mongoose');
const songCollection = require('../models/songModel');

const database = require('../database');

const { ObjectID } = require('bson');

const {Schema} = mongoose;

const userSchema = new Schema (
{
    "name": String,
    "lastname": String,
    "email": String,
    "age": String,
    "favSongs": [{type: ObjectID, ref:"Songs"}]
}, {collection: 'userList'}
)

let Users = mongoose.model('Users', userSchema);



const listAllUsers = async (req, res) => {
    const userList = await Users.find().populate('favSongs')
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
        Users.create(req.body);
        res.json(req.body);
    } else {
        res.status(400).send("El formato del Usuario es incorrecto.")
    }
};

const addFavSongToUser = async (req, res) => {
    const userName = req.params.user;
    const songName = req.params.song;
    const song = await songCollection.Songs.findOne({name: songName});
    const user = await Users.findOne({name: userName});
    console.log("song", song);
    console.log("user", user);
    if(song == null){
        res.status(400).send("La canción " + songName + " no existe en esta base de datos.")
    }
    else if(user == null){
        res.status(400).send("El usuario " + userName + " no existe en esta base de datos.")
    }
    else{
        await Users.findOneAndUpdate({name : userName}, 
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
    const user = await Users.findOne({name: userName});
    console.log("song", song);
    console.log("user", user);
    if(song == null){
        res.status(400).send("La canción " + songName + " no existe en esta base de datos.")
    }
    else if(user == null){
        res.status(400).send("El usuario " + userName + " no existe en esta base de datos.")
    }
    else{
        await Users.findOneAndUpdate({name : userName}, 
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
        if(await Users.findOneAndUpdate(query, 
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
    if (await Users.deleteOne(query)) {
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
    deleteFavSongOfUser,
    Users
};