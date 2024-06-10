var express = require("express");
var router = express.Router();

var tgauthRouter = require("./tg");

router.use("/tg", tgauthRouter);

module.exports = router;
