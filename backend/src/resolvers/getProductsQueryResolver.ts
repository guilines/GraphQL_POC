import { Query } from "../generated/resolvers-types";
import getProductDataFetcher from "../datafetchers/getProductDataFetcher";

const resolvers: {
  Query: { getProducts: () => Promise<Query["getProducts"]> };
} = {
  Query: {
    getProducts: async (): Promise<Query["getProducts"]> => {
      return getProductDataFetcher();
    },
  },
};

export default resolvers;
