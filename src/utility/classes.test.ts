import { classes } from "./classes";
import "@testing-library/jest-dom";

/*
  In this test, we cover different scenarios for the classes utility function:
  Concatenating multiple class names into a single string.
  Ignoring empty or falsy class names.
  Handling conditional class names using the ternary operator.
  Handling dynamic class names passed as variables.
*/

describe("classes", () => {
  it("should concatenate multiple class names into a single string", () => {
    // Arrange
    const classNames = ["btn", "active", "custom", ""];

    // Act
    const result = classes(...classNames);

    // Assert
    expect(result).toEqual("btn active custom");
  });

  it("should ignore empty or falsy class names", () => {
    // Arrange
    const classNames: any = ["", null, undefined, "btn", false, 0];

    // Act
    const result = classes(...classNames);

    // Assert
    expect(result).toEqual("btn");
  });

  it("should handle conditional class names", () => {
    // Arrange
    const classNames: any = ["btn", true && "active", false && "hidden"];

    // Act
    const result = classes(...classNames);

    // Assert
    expect(result).toEqual("btn active");
  });

  it("should handle dynamic class names from variables", () => {
    // Arrange
    const primaryClass = "primary";
    const additionalClass = "extra";

    // Act
    const result = classes(primaryClass, additionalClass);

    // Assert
    expect(result).toEqual("primary extra");
  });
});
