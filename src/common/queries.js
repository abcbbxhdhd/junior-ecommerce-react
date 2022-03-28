import { gql } from "@apollo/client";

const GET_CATEGORIES = gql`
    {
        categories {
            name
        }
    }
`

const GET_CURRENCIES = gql`
    {
        currencies {
            label
            symbol
        }
    }
`

const GET_PRODUCT_BY_ID = gql`
    query($productId: String!) {
        product(id: $productId) {
            id
            name
            inStock
            gallery
            description
            category
            attributes {
                id
                name
                type
                items {
                    displayValue
                    value
                    id
                }
            }
            prices {
                currency {
                    label
                    symbol
                }
                amount
            }
            brand
        }
    }
`

const GET_PRODUCTS_BY_CATEGORY = gql`
    query($categoryName: String!) {
        category(input: {title: $categoryName}) {
            name
            products {
                id
                name
                gallery
                inStock
                prices {
                    currency {
                        label
                        symbol
                    }
                    amount
                }
            }
        }
    }
`

export {GET_CATEGORIES, GET_CURRENCIES, GET_PRODUCT_BY_ID, GET_PRODUCTS_BY_CATEGORY}