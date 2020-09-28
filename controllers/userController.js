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

module.exports = {
    listAllUsers
};