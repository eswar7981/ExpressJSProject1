const express = require("express");
const router = express.Router();
const path = require("path");
const PlayerStatController = require("../controllers/playerstatsController");

router.get("/", PlayerStatController.AddOrEditPlayerStat);

router.post("/submitPlayerData", PlayerStatController.SubmitPlayerData);

router.post("/searchPlayer",PlayerStatController.SearchPlayer)

router.post("/editPlayerInfo",PlayerStatController.AddOrEditPlayerStat)

module.exports = router;
