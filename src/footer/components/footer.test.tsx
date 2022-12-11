import { screen, render } from "@testing-library/react";
import { Footer } from "./footer";

describe("Test footer component", () => {
  it("shouldt render text", () => {
    render(<Footer />);
    const text = screen.getByText("footer");
    expect(text).toBeInTheDocument();
  });
});
