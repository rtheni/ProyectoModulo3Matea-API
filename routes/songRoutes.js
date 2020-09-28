const songController = require("../controllers/songController");

var express = require('express');
var router = express.Router();

router.get("/songs/", songController.listAllSongs)
router.post("/songs/", songController.addSong)
router.put("/songs/:song", songController.modifySong)
router.delete("/songs/:song", songController.deleteSong)

module.exports = router;