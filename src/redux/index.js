import { combineReducers } from "redux";
import { reducerActualData, reducerGetAmount, reducerProductID, reducerSetInteret, reducerSetMonth } from "./reducers";

const reducers = combineReducers({
    actualData: reducerActualData,
    productID: reducerProductID,
    getAmount: reducerGetAmount,
    getMonth: reducerSetMonth,
    getInteret: reducerSetInteret,
})

export default reducers;