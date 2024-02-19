const { getQuestions } = require("../controllers/questionController");
const questionModel = require("../models/Question");

jest.mock("../models/Question"); // Mock the Question model

describe("getQuestions", () => {
  it("should return questions", () => {
    const mockQuestions = [
      {
        question: "Question1",
        options: [
          {
            text: "Option1",
            type: "extrovert",
          },
          {
            text: "Option2",
            type: "introvert",
          },
        ],
      },
      {
        question: "Question2",
        options: [
          {
            text: "Option1",
            type: "introvert",
          },
          {
            text: "Option2",
            type: "extrovert",
          },
        ],
      },
    ];

    questionModel.getQuestions.mockReturnValue(mockQuestions);
    const res = { json: jest.fn() };
    getQuestions(null, res);
    expect(res.json).toHaveBeenCalledWith(mockQuestions);
  });
});
