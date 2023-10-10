import { Product } from "../generated/resolvers-types";

const getProductDataFetcher = async (): Promise<Array<Product>> => {
  return [
    {
      id: "1",
      details: {
        title: "Product 1",
        description: "Product 1 description",
        price: {
          originalAmount: 100,
          discountedAmount: 90,
        },
        image: {
          href: "https://via.placeholder.com/150",
        },
        rating: {
          numerator: 4,
          denominator: 5,
        },
      },
      comments: [
        {
          title: "Comment 1",
          description: "Comment 1 description",
        },
        {
          title: "Comment 2",
          description: "Comment 2 description",
        },
      ],
    },
    {
      id: "2",
      details: {
        title: "Product 2",
        description: "Product 2 description",
        price: {
          originalAmount: 200,
          discountedAmount: 190,
        },
        image: {
          href: "https://via.placeholder.com/150",
        },
        rating: {
          numerator: 4,
          denominator: 5,
        },
      },
      comments: [
        {
          title: "Comment 1",
          description: "Comment 1 description",
        },
        {
          title: "Comment 2",
          description: "Comment 2 description",
        },
      ],
    },
  ];
};

export default getProductDataFetcher;
