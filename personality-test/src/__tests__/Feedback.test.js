import React from "react";
import { render } from "@testing-library/react";
import Feedback from "../components/Feedback";

describe("Feedback Component", () => {
  it("renders correctly", () => {
    const result = "Introvert"; // Assuming some example result

    const { getByText } = render(<Feedback result={result} />);

    // Check if the result is displayed correctly
    expect(getByText(`You are an`)).toBeInTheDocument();
  });
});
