import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";
describe("Greeting Component ", () => {
  test("renders hello world as text", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ....nothing

    // Assert
    const element = screen.getByText("Hello world", { exact: false });
    expect(element).toBeInTheDocument();
  });

  test("renders it's good to see you if the button was NOT clicked", () => {
    render(<Greeting />);
    const outputElement = screen.getByText("good to see you", {
      exact: false,
    });
    expect(outputElement).toBeInTheDocument();
  });

  test('renders "changed!" clicked', () => {
    //   Arrange
    render(<Greeting />);
    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    //   Assert
    const outputElement = screen.getByText("changed!", {
      exact: false,
    });
    expect(outputElement).toBeInTheDocument();
  });

  test("donnot renders good to see you button was clicked", () => {
    //   Arrange
    render(<Greeting />);
    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    //   Assert
    const textElement = screen.queryByText("It's good to see you", {
      exact: false,
    });
    expect(textElement).toBeNull();
  });
});
