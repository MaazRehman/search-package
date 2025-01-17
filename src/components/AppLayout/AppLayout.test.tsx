import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import AppLayout from "./AppLayout";

jest.mock("../package/Packages", () => () => (
  <div>Mocked Packages Component</div>
));

describe("<AppLayout/>", () => {
  it("should render AppLayout component correctly", () => {
    render(<AppLayout />);

    const sider = screen.getByTestId("sider");
    expect(sider).toBeInTheDocument();

    const header = screen.getByTestId("header");
    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent("Bower Search");

    const content = screen.getByTestId("content");
    expect(content).toBeInTheDocument();
    expect(content).toHaveTextContent("Mocked Packages Component");

    const footer = screen.getByTestId("footer");
    expect(footer).toBeInTheDocument();
    expect(footer).toHaveTextContent(
      `Bower Search 2.0 ©${new Date().getFullYear()}`,
    );
  });
});
