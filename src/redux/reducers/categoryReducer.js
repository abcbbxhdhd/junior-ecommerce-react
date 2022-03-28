const initialState = "all"

export function setCurrentCategory(category) {
    return {
        type: "SET_CURRENT_CATEGORY",
        payload: category
    }
}

export default function categoryReducer(state = initialState, action) {
    switch (action.type) {
        case "SET_CURRENT_CATEGORY":
            return action.payload
        default: 
            return state
    }
}

