const initialState = []

export function addProduct(id) {
    return {
        type: "ADD_PRODUCT",
        payload: id
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
            return [...state, {id: action.payload}]
        case "REMOVE_PRODUCT":
            return state.filter(productId => productId !== action.payload)
        default:
            return state
    }
}