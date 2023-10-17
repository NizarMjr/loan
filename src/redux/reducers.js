import { Types } from "./Types"

const productName = 'automobile'
const amount = '250000';
const month = '12';

export const reducerSetProductName = (state = productName, { type, payload }) => {
    switch (type) {
        case Types.SET_PRODUCT: {
            state = payload;
            return state;
        }
        default: return state;
    }
}
export const reducerSetAmount = (state = amount, { type, payload }) => {
    switch (type) {
        case Types.SET_AMOUNT: {
            state = payload;
            return state;
        }
        default: return state;
    }
}
export const reducerSetMonth = (state = month, { type, payload }) => {
    switch (type) {
        case Types.SET_MONTHS: {
            state = payload;
            return state;
        }
        default: return state;
    }
}