const mongoose = require('mongoose');
const schema = new mongoose.Schema({
  title: String,

  description: String,
});

/**
 * ("import("mongoose").model")
 */
const model = new mongoose.model('note', schema);

module.exports = { model };
