const userController = require("../controllers/userController");

var express = require('express');
var router = express.Router();

router.get("/users/", userController.listAllUsers)
router.post("/users/", userController.addUser)
router.put("/users/:user", userController.modifyUser)
router.delete("/users/:user", userController.deleteUser)

module.exports = router;