import { render, screen } from "@testing-library/react";
import HomePage from "pages";
import "@testing-library/jest-dom";

describe("Home", () => {
  it("renders a heading", () => {
    render(<HomePage />);

    const heading = screen.getByRole("heading");

    expect(heading).toHaveTextContent("next app");
  });
});
