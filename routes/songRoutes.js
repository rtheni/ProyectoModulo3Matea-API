const songController = require("../controllers/songController");

var express = require('express');
var router = express.Router();

// Home page route.
router.get("/songs/", songController.listAllSongs)

module.exports = router;