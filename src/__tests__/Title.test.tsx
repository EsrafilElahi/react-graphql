import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import Title from "../components/Title";

afterEach(() => {
  cleanup();
});

beforeEach(() => {
  render(<Title handleScroll={vi.fn()} />);
});

describe("Title Component", () => {
  test("2 title and 1 btn exists in document", () => {
    const nameTitle = screen.getByRole("heading", { name: /Esrafil Elahi/i });
    const positionTitle = screen.getByRole("heading", {
      name: /Senior Frontend Engineer/i,
    });
    const btnAboutMe = screen.getByRole("button");

    expect(nameTitle).toBeInTheDocument();
    expect(positionTitle).toBeInTheDocument();
    expect(btnAboutMe).toBeInTheDocument();
  });
});
