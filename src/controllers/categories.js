const db = require("../models");
const { respond } = require("../helpers/responses");
module.exports.getCategories = async (_, res) => {
  try {
    const categories = await db.Categories.find(); // returns an Array
    return respond(res, 200, { categories });
  } catch (e) {
    return respond(res, 500, { error: e }, false);
  }
};

module.exports.getReviewsOfSpecificCategory = async (req, res) => {
  try {
    const reviews = await db.Reviews.find({
      $where: { category_name: req.query.category_name },
    });
    return respond(res, 200, { reviews });
  } catch (e) {
    return respond(res, 500, { error: e }, false);
  }
};

module.exports.requestCategory = async (req, res) => {
  try {
  } catch (e) {}
};

module.exports.updateCategory = async (req, res) => {
  try {
    await db.Categories.updateOne(
      { $where: { name: req.body.name } },
      { $set: { title: req.body.title, name: req.body.newName } }
    );
    return respond(res, 200, { status: "Category updated!" });
  } catch (e) {
    return respond(res, 500, { error: e }, false);
  }
};

module.exports.deleteCategory = async (req, res) => {
  try {
    await db.Categories.deleteOne({ $where: { name: req.query.name } });
    return respond(res, 200, { status: "Deleted Category!" });
  } catch (e) {
    return respond(res, 500, { error: e }, false);
  }
};
