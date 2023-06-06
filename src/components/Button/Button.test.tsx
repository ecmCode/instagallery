import { render } from "@testing-library/react";
import Button from "./Button";
import "@testing-library/jest-dom";

describe("Button component", () => {
  it("renders button with correct variant and children", () => {
    const variant = "primary";
    const href = "/example";
    const children = "Click me";
    const className = "custom-class";

    const { getByText, getByRole } = render(
      <Button variant={variant} href={href} className={className}>
        {children}
      </Button>
    );

    const button = getByRole("link");
    expect(button).toHaveClass("base primary custom-class");
    expect(button).toHaveAttribute("href", href);
    expect(getByText(children)).toBeInTheDocument();
  });

  it("renders button without variant", () => {
    const href = "/example";
    const children = "Click me";

    const { getByRole, getByText } = render(
      <Button href={href}>{children}</Button>
    );

    const button = getByRole("link");
    expect(button).toHaveClass("base");
    expect(button).toHaveAttribute("href", href);
    expect(getByText(children)).toBeInTheDocument();
  });
});
