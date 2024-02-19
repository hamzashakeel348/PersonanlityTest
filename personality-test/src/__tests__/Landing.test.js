import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Landing from "../components/Landing";

describe("Landing Component", () => {
  it("renders correctly", () => {
    const handleGetStartedClick = jest.fn();
    const { getByText } = render(
      <Landing handleGetStartedClick={handleGetStartedClick} />
    );

    expect(
      getByText(/Unlock Your Personality Potential Today!/i)
    ).toBeInTheDocument();
    expect(
      getByText(
        /Are you curious about where you fall on the spectrum between introversion and extroversion?/i
      )
    ).toBeInTheDocument();

    expect(getByText(/Get Started/i)).toBeInTheDocument();
  });

  it("calls handleGetStartedClick when 'Get Started' button is clicked", () => {
    const handleGetStartedClick = jest.fn();
    const { getByText } = render(
      <Landing handleGetStartedClick={handleGetStartedClick} />
    );

    fireEvent.click(getByText(/Get Started/i));

    expect(handleGetStartedClick).toHaveBeenCalledTimes(1);
  });
});
