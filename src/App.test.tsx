import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import App from "./App";

describe("Test the app component", () => {
  it("renders the app component correctly", () => {
    render(<App />);

    const text = screen.findByText(/app/i);
    expect(text).toBeInTheDocument();
  });
});
