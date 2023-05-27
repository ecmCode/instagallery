import { render } from "@testing-library/react";
import Home from "./";

describe("Home", () => {
  it("matches the snapshot", () => {
    const { asFragment } = render(<Home photos={[]} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
