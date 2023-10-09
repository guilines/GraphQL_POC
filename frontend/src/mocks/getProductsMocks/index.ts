import { Product } from "~/generated/graphql";
import { GET_PRODUCTS_QUERY } from "~/clientState/operations/getProducts";

const productBuilder = (index: number): Product => ({
  id: `${index}`,
  details: {
    title: `Product_${index}`,
    description: `Product ${index} description`,
    price: {
      originalAmount: index * 100,
      discountedAmount: index * 90,
    },
    image: {
      href: "https://picsum.photos/200",
    },
    rating: {
      numerator: index < 6 ? index : 5,
      denominator: 5,
    },
  },
  comments: [],
});

export const getProductsMocks = [
  {
    request: {
      query: GET_PRODUCTS_QUERY,
    },
    result: {
      data: {
        getProducts: [
          productBuilder(1),
          productBuilder(2),
          productBuilder(3),
          productBuilder(4),
          productBuilder(5),
        ],
      },
    },
  },
];
