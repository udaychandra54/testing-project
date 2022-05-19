import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async Component", () => {
  test("renders posts if request succeeds ", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: () => [{ id: "p1", title: "first post" }],
    });
    // arrange
    render(<Async />);

    // Act
    // Assert
    const listElement = await screen.findAllByRole("listitem");
    expect(listElement).not.toHaveLength(0);
  });
});
