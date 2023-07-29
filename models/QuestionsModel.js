const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
  question: { type: String, require: true },
  options: { type: Array, require: true },
  correctOption: { type: Number, require: true },
  points: { type: Number, require: true },
});
module.exports = mongoose.model("Question", QuestionSchema);
