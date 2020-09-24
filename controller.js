const songCollection = require('./models/songModel');
const userCollection = require('./models/userModel');

const listFavSongs = async (req, res, user) => {
    const songList = await songCollection.Canciones.find(user)
    if (songList.length >= 1){
    res.send(songList)
    }
else{
    res.status(400).send("No existen canciónes en esta base de datos.");
}

};
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
    listFavSongs,
    listAllUsers
};