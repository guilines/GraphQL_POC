import React, { FC } from "react";
import { Product } from "~/generated/graphql";
import ProductCard from "~/components/ProductCard";
import { useGetProductsQuery } from "~/clientState/queries/getProductsQuery";
import Loading from "./Loading";
import { Container, Grid } from "@mui/material";

const Products: FC<{ products: Array<Product> }> = ({ products }) => {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {products.map((product: Product) => (
        <Grid key={`product-${product.id}`} sx={{ margin: 4 }}>
          <ProductCard details={product.details} />
        </Grid>
      ))}
    </Grid>
  );
};

const ProductsView: FC = () => {
  const { data, loading } = useGetProductsQuery();
  return (
    <Container>
      {loading && <Loading />}
      {!loading && <Products products={data} />}
    </Container>
  );
};

export default ProductsView;
