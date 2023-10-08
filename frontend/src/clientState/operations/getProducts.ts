import {gql} from "@apollo/client";

export const GET_PRODUCTS_QUERY = gql`
    query GetProducts {
        getProducts {
                id
                details {
                    title
                    description
                    price {
                        originalAmount
                        discountedAmount
                    }
                    image {
                        href
                    }
                    rating {
                        numerator
                        denominator
                    }
                }
            comments {
                title
                description
            }
        }
    }
`;
