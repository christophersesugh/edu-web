import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Profile from "./profile";

describe("render profile component correctly", () => {
  it("should toggle profile component", () => {
    render(<Profile name="Chris" age={20} info="software engineer" />);
    const hideDetails = screen.getByRole("button", {
      name: /hide details/i,
    });
    screen.debug(hideDetails);

    fireEvent.click(hideDetails);

    const showDetails = screen.getByRole("button", {
      name: /show details/i,
    });

    expect(showDetails).toBeInTheDocument();
  });

  it("should display the heading text correctly", () => {
    render(<Profile name="Chris" age={20} info="software engineer" />);
    const text = screen.getByRole("heading", {
      name: /for testing purpose/i,
    });

    expect(text).toBeInTheDocument();
  });
});
