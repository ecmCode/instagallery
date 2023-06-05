import { render, screen } from "@testing-library/react";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
import "@testing-library/jest-dom";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("Navbar", () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      pathname: "/",
    });
  });

  it("renders all navigation links", () => {
    render(<Navbar />);

    const homeLink = screen.getByText("HOME");
    const galleryLink = screen.getByText("GALLERY");
    const loginLink = screen.getByText("LOGIN");

    expect(homeLink).toBeInTheDocument();
    expect(galleryLink).toBeInTheDocument();
    expect(loginLink).toBeInTheDocument();
  });

  it("applies active class to current route link", () => {
    (useRouter as jest.Mock).mockReturnValue({
      pathname: "/gallery",
    });

    render(<Navbar />);

    const galleryLink = screen.getByText("GALLERY");

    expect(galleryLink).toHaveClass("text-green-600", "font-semibold");
  });
});
