import axios from "axios";

const BASE_URL = "http://localhost:8000/api";

export const fetchQuestions = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/questions`);
    return response.data;
  } catch (error) {
    console.error("Error fetching questions:", error);
    throw error;
  }
};

export const determinePersonalityType = async (selectedOptions) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/personality`,
      selectedOptions
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching questions:", error);
    throw error;
  }
};
