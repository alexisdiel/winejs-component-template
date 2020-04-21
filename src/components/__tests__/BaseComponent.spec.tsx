import * as React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BaseComponent } from "../../index";

test("Renders", async () => {
  const { getByRole } = render(<BaseComponent />);
  expect(getByRole("heading")).toHaveTextContent("Base Component");
});
