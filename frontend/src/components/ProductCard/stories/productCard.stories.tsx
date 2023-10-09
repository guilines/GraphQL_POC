import ProductCard from "~/components/ProductCard";
import React from "react";

export default {
  title: "Components/ProductCard",
  component: ProductCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

export const Default = (args) => <ProductCard {...args} />;
Default.args = {
  details: {
    title: "Title",
    description: "Description",
    price: {
      discountedAmount: "99.99",
    },
    image: {
      href: "https://picsum.photos/200",
    },
  },
};
