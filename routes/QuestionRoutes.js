const { Router } = require("express");

const {
  getQuestions,
  saveQuestion,
} = require("../Controller/QuestionController");

const router = Router();

router.get("/", getQuestions);
router.post("/save", saveQuestion);

module.exports = router;
