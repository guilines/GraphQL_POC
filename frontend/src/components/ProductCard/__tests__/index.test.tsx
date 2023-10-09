import React from 'react';
import ProductCard from "~/components/ProductCard";
import {render, screen} from "@testing-library/react";
import {ProductDetails} from "~/generated/graphql";

describe('ProductCard validation', () => {
    it('should render props', async () => {
        const details: ProductDetails = {
            title: 'product_title',
            description: 'product_description',
            rating: {
                numerator: 5,
                denominator: 5,
            },
            price: {
                originalAmount: 100,
                discountedAmount: 90,
            },
            image: {
                href: 'product_img_href',
            }
        }
        render(<ProductCard details={details} />);
        expect(await screen.findByText(details.title)).toBeVisible();
        expect(await screen.findByText(details.description)).toBeVisible();
    });
});
