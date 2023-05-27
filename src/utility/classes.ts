/**
 * This utility function combines multiple class names into a single string.
 * It allows for conditional and dynamic class application in React components.
 * @param args The class names to be combined.
 * @returns The concatenated class names as a string.
 */

export const classes = (...args: string[]): string => {
  return args.filter((arg) => !!arg).join(" ");
};
