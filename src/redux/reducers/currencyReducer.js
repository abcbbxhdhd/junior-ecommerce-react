const initialState = "USD"

export function setCurrentCurrency(currency) {
    return {
        type: "SET_CURRENT_CURRENCY",
        payload: currency
    }
}

export default function currencyReducer(state = initialState, action) {
    switch (action.type) {
        case "SET_CURRENT_CURRENCY":
            return action.payload
        default:
            return state
    }
}