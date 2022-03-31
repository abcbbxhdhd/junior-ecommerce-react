import equal from "fast-deep-equal"

const initialState = []

// {
//     productId: "",
//     id: "",
//     attribute: {
//         type: "",
//         value: ""
//     }
// }
export function plusOneProduct(id) {
    return {
        type: "PLUS_ONE_PRODUCT",
        payload: id
    }
}

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
            stateCopy.push(action.payload)
            return stateCopy
        case "PLUS_ONE_PRODUCT":
            return state.map(pr => {
                if (pr.id === action.payload) {
                    return {...pr, amount: pr.amount + 1} 
                }
                return pr
            })
        case "REMOVE_PRODUCT":
            let productIndex = state.findIndex(pr => pr.id === action.payload)
            console.log(productIndex)
            if (state[productIndex].amount > 1) {
                return state.map((pr, idx) => {
                    if (productIndex === idx) {
                        return {...pr, amount: pr.amount - 1}
                    }
                    return pr
                })
            } else {
                return state.filter(pr => pr.id !== action.payload)
            }
        default:
            return state
    }
}