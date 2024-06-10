function game(req, res, next) {
  return res.status(200).json({
    statusCode: 200,
    status: "success",
    message: "Welcome to the game page",
  });
}

module.exports = {
  game,
};
