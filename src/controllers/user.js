const db = require("../models");
const { respond } = require("../helpers/responses");

module.exports.createUser = async (req, res) => {
  try {
    const { name, profile, age, email, subscribed } = req.body.data;
    await db.User.create({ name, profile, age, email, subscribed });
    return respond(res, 200, {});
  } catch (e) {
    return respond(res, 500, {error: e}, false);
  }
};

module.exports.loginUser = async (req, res) => {
  try {
    const user = await db.User.findOne({ $where: { email: req.body.email } });
    if (!user) {
      return respond(res, 401, {error: "User doesn't exist."}, false);
    }
    const { password } = req.body;
    // TODO: Implement compare password
  } catch (e) {
    return respond(res, 500, { error: e}, false);
  }
};

module.exports.subscribeUser = async (req, res) => {
  try {
    await db.User.updateOne({$where: { email : req.query.email }}, {$set: {subscribed: true}});
    return respond(res, 200, {status: "Subscribed!"});
  } catch (e) {
    return respond(res, 500, {error: e}, false);
  }
};

module.exports.rankUser = async (req, res) => {
  try {
  } catch (e) {}
};

module.exports.queryUsers = async (req, res) => {
  try {
  } catch (e) {}
};

module.exports.logoutUser = async (req, res) => {
  try {
  } catch (e) {}
};

module.exports.getUser = async (req, res) => {
  try {
  } catch (e) {}
};

module.exports.deleteUser = async (req, res) => {
  try {
  } catch (e) {}
};
