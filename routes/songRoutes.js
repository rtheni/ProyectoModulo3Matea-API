const songController = require("../controllers/songController");

var express = require('express');
var router = express.Router();

router.get("/songs/", songController.listAllSongs)
router.post("/songs/add", songController.addSong)
router.put("/songs/modify/:song", songController.modifySong)
router.delete("/songs/delete/:song", songController.deleteSong)

module.exports = router;