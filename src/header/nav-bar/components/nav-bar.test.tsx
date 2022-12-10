import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import { Navbar } from "./nav-bar";

describe("Test the nav bar component", () => {
  it("should render nav bar text correctly", async () => {
    render(<Navbar />);
    const heading = await screen.findByRole("button");
    expect(heading).toHaveTextContent("Navbar");
  });
});
