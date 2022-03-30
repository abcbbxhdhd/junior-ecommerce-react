const initialState = []

// {
//     productId: "",
//     id: "",
//     attribute: {
//         type: "",
//         value: ""
//     }
// }
export function addProduct(product) {
    return {
        type: "ADD_PRODUCT",
        payload: product
    }
}

export function removeProduct(id) {
    return {
        type: "REMOVE_PRODUCT",
        payload: id
    }
}

export default function cartReducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_PRODUCT":
            let stateCopy = state
            let indexOf = state.findIndex(pr => {
                return ((pr.productId === action.payload.productId) && (pr.value === action.payload.attribute.value) && (pr.attributeName === action.payload.attribute.attributeName))
            })
            if (indexOf !== -1) {
                stateCopy[indexOf] = {...state[indexOf], amount: state[indexOf].amount + 1}
            } else {
                stateCopy.push(action.payload)
            }
            return stateCopy
        case "REMOVE_PRODUCT":
            let productIndex = state.findIndex(pr => pr.id === action.payload)
            if (state[productIndex].amount > 1) {
                return state.map((pr, idx) => {
                    if (productIndex === idx) {
                        return {...pr, amount: pr.amount - 1}
                    }
                })
            } else {
                return state.filter(pr => pr.id !== action.payload)
            }
        default:
            return state
    }
}