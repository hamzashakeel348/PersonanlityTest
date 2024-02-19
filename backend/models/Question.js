const questions = [
  {
    id: 1,
    title: "How do you feel in large social gatherings?",
    options: [
      {
        text: "I feel energized and enjoy interacting with many people.",
        type: "extrovert",
      },
      {
        text: "I feel comfortable, but prefer smaller groups.",
        type: "extrovert",
      },
      {
        text: "I feel overwhelmed and prefer to observe rather than participate.",
        type: "introvert",
      },
      {
        text: "I feel anxious and uncomfortable, and try to avoid such situations.",
        type: "introvert",
      },
    ],
  },
  {
    id: 2,
    title: "How often do you seek out new social experiences?",
    options: [
      {
        text: "Very often, I'm always looking for new things to do and people to meet.",
        type: "extrovert",
      },
      {
        text: "Occasionally, when I'm in the mood for something different.",
        type: "extrovert",
      },
      {
        text: "Rarely, I prefer familiar settings and routines.",
        type: "introvert",
      },
      {
        text: "Never, I'm content with my current social circle and activities.",
        type: "introvert",
      },
    ],
  },
  {
    id: 3,
    title: "How do you recharge after socializing?",
    options: [
      {
        text: "I recharge by spending more time with friends or engaging in social activities.",
        type: "extrovert",
      },
      {
        text: "I need some alone time to relax and unwind.",
        type: "extrovert",
      },
      {
        text: "I need a lot of alone time to process my thoughts and feelings.",
        type: "introvert",
      },
      {
        text: "I feel drained and exhausted, and need a lot of alone time to recover.",
        type: "introvert",
      },
    ],
  },
  {
    id: 4,

    title: "How do you handle unexpected changes or disruptions to your plans?",
    options: [
      {
        text: "I embrace spontaneity and enjoy adapting to new situations.",
        type: "extrovert",
      },
      {
        text: "I'm flexible and can adjust to changes with ease.",
        type: "extrovert",
      },
      {
        text: "I prefer stability and may feel uneasy with sudden changes.",
        type: "introvert",
      },
      {
        text: "I find it challenging to cope with unexpected changes and may feel overwhelmed.",
        type: "introvert",
      },
    ],
  },
  {
    id: 5,
    title:
      "How do you feel about public speaking or being the center of attention?",
    options: [
      {
        text: "I thrive on it and enjoy being in the spotlight.",
        type: "extrovert",
      },
      {
        text: "I can handle it if necessary, but I prefer to blend into the background.",
        type: "extrovert",
      },
      {
        text: "I feel nervous and uncomfortable, but I can manage with practice.",
        type: "introvert",
      },
      {
        text: "I avoid it at all costs and feel extremely anxious in such situations.",
        type: "introvert",
      },
    ],
  },
];

const getQuestions = () => {
  return questions;
};

const createQuestion = (newQuestion) => {
  newQuestion.id = nextId++;
  questions.push(newQuestion);
  return newQuestion;
};

const deleteQuestionById = (idToDelete) => {
  const indexToDelete = questions.findIndex(
    (question) => question.id === idToDelete
  );
  if (indexToDelete !== -1) {
    questions.splice(indexToDelete, 1);
    return true;
  }
  return false;
};

module.exports = { getQuestions, createQuestion, deleteQuestionById };
