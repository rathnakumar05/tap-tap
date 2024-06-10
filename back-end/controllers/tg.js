var jwt = require("jsonwebtoken");
const _ = require("lodash");
var TGUser = require("../models/TGUser");

async function auth(req, res, next) {
  try {
    var {
      id = null,
      username = "",
      first_name = "",
      last_name = "",
      language_code = "",
    } = req.body;

    if (!_.isNil(id)) {
      var tg_user = await TGUser.findOne({
        where: {
          userid: id,
        },
      });

      if (!tg_user) {
        var tg_user_data = {
          userid: id,
          username: username,
          first_name: first_name,
          last_name: last_name,
          language_code: language_code,
        };
        var create_tg_user = await TGUser.create(tg_user_data);
        if (!create_tg_user) {
          throw new Error(
            `TGUser insert failed in /api/tg/auth ${JSON.stringify(
              tg_user_data
            )}`
          );
        }
      }

      var token = jwt.sign(
        { id: id, username: username },
        process.env.SECRET_KEY
      );

      return res.status(200).json({
        statusCode: 200,
        status: "success",
        token: token,
        message: "Successfully authenticated",
      });
    }

    return res.status(400).json({
      statusCode: 400,
      status: "error",
      message: "Invalid Data",
    });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  auth,
};
