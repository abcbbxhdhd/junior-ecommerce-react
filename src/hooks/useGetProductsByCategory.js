import { gql, useQuery } from "@apollo/client"

const GET_PRODUCTS_BY_CATEGORY = gql`
    query($categoryName: String!) {
        category(input: {title: $categoryName}) {
            name
            products {
                id
                name
                gallery
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
`;

export default function useGetPostsByCategory(categoryName) {
    const { data } = useQuery(GET_PRODUCTS_BY_CATEGORY, {
        variables: {
            categoryName
        }
    })
    return data
}