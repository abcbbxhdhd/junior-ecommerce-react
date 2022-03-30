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
                return ((pr.productId === action.payload.productId) && (pr.attribute.value === action.payload.attribute.value) && (pr.attribute.attributeName === action.payload.attribute.attributeName))
            })
            if (indexOf !== -1) {
                stateCopy[indexOf] = {...state[indexOf], amount: state[indexOf].amount + 1}
            } else {
                stateCopy.push(action.payload)
            }
            return stateCopy
        case "REMOVE_PRODUCT":
            return state.filter(product => product.id !== action.payload)
        default:
            return state
    }
}