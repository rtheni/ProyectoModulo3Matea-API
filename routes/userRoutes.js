const userController = require("../controllers/userController");

var express = require('express');
var router = express.Router();


router.get("/users/", userController.listAllUsers)

router.post("/users/add", userController.addUser)

router.put("/users/modify/:user", userController.modifyUser)

router.delete("/users/delete/:user", userController.deleteUser)


router.put("/users/favsong/add/:user&:song", userController.addFavSongToUser)

router.delete("/users/favsong/delete/:user&:song", userController.deleteFavSongOfUser)

module.exports = router;