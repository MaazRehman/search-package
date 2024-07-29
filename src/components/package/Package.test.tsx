import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Packages from "./Packages";
import { usePackageInfo } from "../../contexts/PackageContext";
import { useLoadingContext } from "../../contexts/LoadingContext";

jest.mock("../SearchPackage/SearchPackage", () => () => (
  <div data-testid="search-package">Mocked SearchPackage Component</div>
));
jest.mock("../Loader/Loader", () => ({ tip }: { tip: string }) => (
  <div data-testid="loader">{tip}</div>
));

jest.mock("../../hooks/useGetPackageInfoSearchResult", () => jest.fn());
jest.mock("../../contexts/PackageContext", () => ({
  usePackageInfo: jest.fn(),
}));
jest.mock("../../contexts/LoadingContext", () => ({
  useLoadingContext: jest.fn(),
}));

describe("Packages", () => {
  test("renders loader when loading is true", () => {
    (useLoadingContext as jest.Mock).mockReturnValue({ loading: true });
    (usePackageInfo as jest.Mock).mockReturnValue({ packages: [] });

    render(<Packages />);

    const loader = screen.getByTestId("loader");
    expect(loader).toBeInTheDocument();
    expect(loader).toHaveTextContent("Loading content, please wait");
  });

  test("renders table when loading is false", () => {
    (useLoadingContext as jest.Mock).mockReturnValue({ loading: false });
    (usePackageInfo as jest.Mock).mockReturnValue({
      packages: [
        {
          name: "package1",
          owners: "https://example.com/package1",
          stars: 100,
        },
        {
          name: "package2",
          owners: "https://example.com/package2",
          stars: 200,
        },
      ],
    });

    render(<Packages />);

    const table = screen.getByTestId("table");
    expect(table).toBeInTheDocument();
  });
});
