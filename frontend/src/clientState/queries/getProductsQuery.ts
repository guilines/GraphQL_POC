import { ApolloError, useQuery } from "@apollo/client";
import { GET_PRODUCTS_QUERY } from "~/clientState/operations/getProducts";
import { Product } from "~/generated/graphql";

interface GetProductsQueryData {
  data: Array<Product>;
  loading: boolean;
  error?: ApolloError;
}

export const useGetProductsQuery = (): GetProductsQueryData => {
  const { data, error, loading } = useQuery(GET_PRODUCTS_QUERY);
  return {
    data: data?.getProducts ?? [],
    loading,
    error,
  };
};
