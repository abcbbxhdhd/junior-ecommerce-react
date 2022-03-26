import { gql, useQuery } from "@apollo/client"

const GET_CURRENCIES = gql`
    {
        currencies {
            label
            symbol
        }
    }
`

export default function useGetCurrencies() {
    const {data} = useQuery(GET_CURRENCIES)
    return data
}