import { useQuery } from "@apollo/client"
import { GET_CURRENCIES } from "../../common/queries"
import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { setCurrentCurrency } from "../../redux/reducers/currencyReducer"


export default function CurrencyPicker() {
    const { data, loading, error} = useQuery(GET_CURRENCIES)
    const dispatch = useDispatch()
    const [currencies, setCurrencies] = useState([])

    useEffect(() => {
        if (data) {
            setCurrencies(data.currencies)
        }
    }, [data])

    const selectOptionsToRender = currencies.map(currency => {
        return <option className="currency-option" value={currency.label}>{currency.symbol} {currency.label}</option>
    })

    return (
        <div className="currency-picker">
            <select className="select-currency" onChange={(e) => dispatch(setCurrentCurrency(e.target.value))}>
                {selectOptionsToRender}
            </select>
        </div>
    )
}