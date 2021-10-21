import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  beforeEach(() => {
    jest.spyOn(window, "alert");

    render(<App />);
  });

  it("starts off with a score of 0", () => {
    expect(screen.getByRole("heading")).toHaveTextContent("Current Score: 0");
  });

  it("starts off with a value of 1", () => {
    expect(screen.getAllByRole("button")[0]).toHaveTextContent("+1");
    expect(screen.getAllByRole("button")[1]).toHaveTextContent(
      "Pay 10 points to change from +1 to +2"
    );
  });

  it("increments score after a click", () => {
    fireEvent.click(screen.getByText("+1"));

    expect(screen.getByRole("heading")).toHaveTextContent("Current Score: 1");
  });

  it("alerts when the value button is pressed with not enough score", () => {
    fireEvent.click(screen.getByText("Pay 10 points to change from +1 to +2"));

    expect(alert).toHaveBeenCalledWith("You can't afford that!");
  });

  it("transfers 10 score to 1 value when the value button is pressed with enough score", () => {
    for (let i = 0; i < 11; i += 1) {
      fireEvent.click(screen.getByText("+1"));
    }

    fireEvent.click(screen.getByText("Pay 10 points to change from +1 to +2"));

    expect(screen.getByRole("heading")).toHaveTextContent("Current Score: 1");
    expect(screen.getAllByRole("button")[0]).toHaveTextContent("+2");
    expect(screen.getAllByRole("button")[1]).toHaveTextContent(
      "Pay 10 points to change from +2 to +3"
    );
  });

  it("decreases score by 2 when the score button is pressed after increasing", () => {
    for (let i = 0; i < 10; i += 1) {
      fireEvent.click(screen.getByText("+1"));
    }

    fireEvent.click(screen.getByText("Pay 10 points to change from +1 to +2"));
    fireEvent.click(screen.getByText("+2"));

    expect(screen.getByRole("heading")).toHaveTextContent("Current Score: 2");
  });

  it("displays victory when score reaches 100", () => {
    for (let i = 0; i < 100; i += 1) {
      fireEvent.click(screen.getByText("+1"));
    }

    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("You Win");
    expect(screen.getByRole("button")).toHaveTextContent("Play again?");
  });

  it("resxets score to 0 after winning", () => {
    for (let i = 0; i < 100; i += 1) {
      fireEvent.click(screen.getByText("+1"));
    }

    fireEvent.click(screen.getByText("Play again?"));

    screen.getByText("Current Score: 0");
  });
});
