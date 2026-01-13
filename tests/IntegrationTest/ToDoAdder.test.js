import { useState } from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import TodoAdder from "../../src/IntegrationTest/ToDoAdder";

describe("TodoAdder", () => {
  test("calls onAdd prop when a todo is added", async () => {
    const mockOnAdd = jest.fn();
    render(<TodoAdder onAdd={mockOnAdd} />);
    expect(screen.getByText("Todo List")).toBeInTheDocument();
    const input = screen.getByPlaceholderText("Enter todo");
    const button = screen.getByText("Add");
    await userEvent.type(input, "Clean the kitchen");
    await userEvent.click(button);
    expect(mockOnAdd).toHaveBeenCalledWith("Clean the kitchen");
    expect(input).toHaveValue("");
  });

  test("does not call onAdd prop when input is empty", async () => {
    const mockOnAdd = jest.fn();
    render(<TodoAdder onAdd={mockOnAdd} />);
    const input = screen.getByPlaceholderText("Enter todo");
    const button = screen.getByText("Add");
    await userEvent.click(button);
    expect(mockOnAdd).not.toHaveBeenCalled();
    expect(input).toHaveValue("");
  });

  test("displays warning message when input text is too long", async () => {
    render(<TodoAdder onAdd={jest.fn()} />);
    expect(screen.queryByTestId("warning")).not.toBeInTheDocument();
    const input = screen.getByPlaceholderText("Enter todo");
    await userEvent.type(input, "Clean the kitchen if it is wet");
    expect(screen.getByTestId("warning")).toBeInTheDocument();
    expect(screen.getByTestId("warning")).toHaveTextContent("Too long!");
  });

  test("does not display warning message for short input text", async () => {
    render(<TodoAdder onAdd={jest.fn()} />);
    expect(screen.queryByTestId("warning")).not.toBeInTheDocument();
    const input = screen.getByPlaceholderText("Enter todo");
    await userEvent.type(input, "Clean the kitchen");
    expect(screen.queryByTestId("warning")).not.toBeInTheDocument();
    expect(input).toHaveValue("Clean the kitchen");
  });
});
