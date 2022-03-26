import { gql, useQuery } from "@apollo/client";

const GET_PRODUCT_BY_ID = gql`
    query($productId: String) {
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

export default function useGetProductById(productId) {
    const { data } = useQuery(GET_PRODUCT_BY_ID, {
        variables: {
            productId
        }
    })
    return data
}