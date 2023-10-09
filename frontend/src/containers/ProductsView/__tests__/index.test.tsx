import React, { FC } from "react";
import { MockedProvider } from "@apollo/client/testing";
import ProductsView from "~/containers/ProductsView";
import { render, screen } from "@testing-library/react";
import { getProductsMocks } from "~/mocks/getProductsMocks";

const App: FC = () => (
  <MockedProvider mocks={getProductsMocks}>
    <ProductsView />
  </MockedProvider>
);

describe("ProductsView validation", () => {
  it("should render products", async () => {
    render(<App />);
    expect(await screen.findByText("Loading...")).toBeVisible();
    expect(await screen.findByText("Product_1")).toBeVisible();
    expect(await screen.findByText("Product_2")).toBeVisible();
    expect(await screen.findByText("Product_3")).toBeVisible();
    expect(await screen.findByText("Product_4")).toBeVisible();
    expect(await screen.findByText("Product_5")).toBeVisible();
  });
});
