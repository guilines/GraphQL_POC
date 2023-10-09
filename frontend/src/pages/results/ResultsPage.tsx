import React, { FC } from "react";
import ProductsView from "~/containers/ProductsView";

const ResultsPage: FC = () => {
  return (
    <div>
      <h1>Results</h1>
      <ProductsView />
    </div>
  );
};

export default ResultsPage;
