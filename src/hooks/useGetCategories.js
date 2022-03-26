import { gql, useQuery } from "@apollo/client"

const GET_CATEGORIES = gql`
    {
        categories {
            name
        }
    }
`

export default function getCategories() {
    const { data } = useQuery(GET_CATEGORIES)
    return data
}