const userCollection = require('../models/userModel');

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
    deleteUser
};