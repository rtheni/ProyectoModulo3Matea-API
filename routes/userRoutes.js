const userController = require("../controllers/userController");

var express = require('express');
var router = express.Router();

// Home page route.
router.get("/users/", userController.listAllUsers)

module.exports = router;