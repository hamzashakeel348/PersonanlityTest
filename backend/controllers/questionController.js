const questionModel = require("../models/Question");

const getQuestions = (_, res) => {
  const questions = questionModel.getQuestions();
  res.json(questions);
};

const getQuestionsWithoutType = (_, res) => {
  const questions = questionModel.getQuestions();

  res.json(
    questions.map((question) => {
      const optionsWithoutType = question.options.map((option) => {
        const { type, ...optionWithoutType } = option;
        return optionWithoutType;
      });

      return { ...question, options: optionsWithoutType };
    })
  );
};

const createQuestion = (req, res) => {
  const newQuestion = req.body;
  const createdQuestion = questionModel.createQuestion(newQuestion);
  res.status(201).json({
    message: "Question created successfully",
    question: createdQuestion,
  });
};

const deleteQuestionById = (req, res) => {
  const idToDelete = parseInt(req.params.id);
  const isDeleted = questionModel.deleteQuestionById(idToDelete);
  if (isDeleted) {
    res.json({
      message: `Question with id ${idToDelete} deleted successfully`,
    });
  } else {
    res.status(404).json({ error: `Question with id ${idToDelete} not found` });
  }
};

module.exports = {
  getQuestions,
  getQuestionsWithoutType,
  createQuestion,
  deleteQuestionById,
};
