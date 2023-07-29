const QuestionModels = require("../models/QuestionsModel");

//getting all our to dos
module.exports.getQuestions = async (req, res) => {
  const question = await QuestionModels.find();
  res.send(question);
};

//adding the to do in the database
module.exports.saveQuestion = async (req, res) => {
  const { question, options, correctOption, points } = req.body;
  QuestionModels.create({
    question,
    options,
    correctOption,
    points,
  }).then((data) => {
    console.log("Added successfully");
    // console.log(data);
    res.send(data);
  });
};
