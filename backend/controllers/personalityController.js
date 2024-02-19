const questionModel = require("../models/Question");

const determinePersonalityType = (req, res) => {
  let extrovertCount = 0;
  let introvertCount = 0;

  const selectedOptions = req.body;
  const questions = questionModel.getQuestions();
  
  const selectedOptionTypes = questions.map((question, index) => {
    return question.options[selectedOptions[index]]?.type;
  });

  for (const option of selectedOptionTypes) {
    if (option === "extrovert") {
      extrovertCount++;
    } else if (option === "introvert") {
      introvertCount++;
    }
  }

  let type = "";
  if (extrovertCount > introvertCount) {
    type = "Extrovert";
  } else if (introvertCount > extrovertCount) {
    type = "Introvert";
  } else {
    type = "Ambivert";
  }
  return res.json({ status: 200, type: type });
};

module.exports = {
  determinePersonalityType,
};
