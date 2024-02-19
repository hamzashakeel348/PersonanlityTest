const express = require("express");
const router = express.Router();
const questionController = require("../controllers/questionController");

router.get("/", questionController.getQuestionsWithoutType);
router.post("/", questionController.createQuestion);
router.delete("/:id", questionController.deleteQuestionById);

module.exports = router;
