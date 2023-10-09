import { getProductsMocks } from "~/mocks/getProductsMocks";
import ProductsView from "../index";

export default {
  title: "Containers/ProductsView",
  component: ProductsView,
  parameters: {
    layout: "centered",
    apolloClient: {
      mocks: getProductsMocks,
    },
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

export const Default = {
  args: {},
};
