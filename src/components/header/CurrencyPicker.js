import { useQuery } from "@apollo/client"
import { GET_CURRENCIES } from "../../common/queries"
import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { setCurrentCurrency } from "../../redux/reducers/currencyReducer"


export default function CurrencyPicker() {
    const { data, loading, error} = useQuery(GET_CURRENCIES)
    const currentCurrency = useSelector(state => state.currentCurrency)
    const dispatch = useDispatch()
    const [currencies, setCurrencies] = useState([])

    useEffect(() => {
        if (data) {
            setCurrencies(data.currencies)
        }
    }, [data])

    console.log(currencies)
    console.log(currentCurrency)

    const selectOptionsToRender = currencies.map(currency => {
        if (currency.label === currentCurrency.label) {
            console.log(true)
            return <option className="currency-option" value={currency.label} selected>{currency.symbol}</option>
        }
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