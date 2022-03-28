import { createStore, combineReducers } from "redux";
import cartReducer from "./reducers/cartReducer";
import categoryReducer from "./reducers/categoryReducer";
import currencyReducer from "./reducers/currencyReducer";

const rootReducer = combineReducers({
    products: cartReducer,
    currentCategory: categoryReducer,
    currentCurrency: currencyReducer
})

const store = createStore(rootReducer)

export default store