const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  title: String,

  description: String,
});

/**
 * ("")
 */
const model = new mongoose.model("note", schema);

module.exports = { model };
