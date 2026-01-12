import { useState } from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import AddCounter from "../../src/usingProps/AddCounter/AddCounter";

describe("InitialCounter", () => {
  test("renders with initial count", () => {
    render(<AddCounter initial={0} onChange={jest.fn()} />);
    expect(screen.getByText("Count: 0")).toBeInTheDocument();
  });

  test("increments count on button click", async () => {
    render(<AddCounter initial={0} onChange={jest.fn()} />);
    const incrementButton = screen.getByText("Increment");
    await userEvent.click(incrementButton);
    expect(screen.getByText("Count: 1")).toBeInTheDocument();
    await userEvent.click(incrementButton);
    expect(screen.getByText("Count: 2")).toBeInTheDocument();
  });

  test("calls onChange prop when count changes", async () => {
    const handleChange = jest.fn();
    render(<AddCounter initial={0} onChange={handleChange} />);
    const incrementButton = screen.getByText("Increment");
    await userEvent.click(incrementButton);
    expect(handleChange).toHaveBeenCalledWith(1);
    // expect(screen.getByText("Count: 1")).toBeInTheDocument();
    await userEvent.click(incrementButton);
    expect(handleChange).toHaveBeenCalledWith(2);
    // expect(screen.getByText("Count: 2")).toBeInTheDocument();
  });

  test("displays warning message when count is 5 or more", async () => {
    render(<AddCounter initial={4} onChange={jest.fn()} />);
    const incrementButton = screen.getByText("Increment");
    expect(screen.queryByTestId("warning-message")).not.toBeInTheDocument();
    await userEvent.click(incrementButton);
    expect(screen.getByTestId("warning-message")).toBeInTheDocument();
    expect(screen.getByText("Count: 5")).toBeInTheDocument();
    expect(screen.getByTestId("warning-message")).toHaveTextContent(
      "High value!"
    );
  });
});
