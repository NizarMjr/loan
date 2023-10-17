import { combineReducers } from "redux";
import { reducerSetAmount, reducerSetMonth, reducerSetProductName } from "./reducers";

const reducers = combineReducers({
    productName: reducerSetProductName,
    getAmount: reducerSetAmount,
    getMonth: reducerSetMonth,
})

export default reducers;