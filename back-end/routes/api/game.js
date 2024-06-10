var express = require("express");
var router = express.Router();

var game = require("../../controllers/game");
var tg_middleware = require("../../middlewares/tg");

router.get("/", tg_middleware.tgauth_required, game.game);

module.exports = router;
