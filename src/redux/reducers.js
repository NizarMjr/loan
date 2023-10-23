import { Types } from "./Types"

const amount = {
    'min': '10000',
    'max': '25000',
};
const month = {
    'min': '12',
    'max': '24',
};
const interet = '4500';
const ID = 1;

const actualData = {
    'amount': 25000,
    'month': 12,
}
export const reducerProductID = (state = ID, { type, payload }) => {
    switch (type) {
        case Types.PRODUCT_ID: {
            state = payload;
            return state;
        }
        default: return state;
    }
}
export const reducerGetAmount = (state = amount, { type, data }) => {
    switch (type) {
        case Types.SET_AMOUNT: {
            state = data;
            return state;
        }
        default: return state;
    }
}
export const reducerSetMonth = (state = month, { type, data }) => {
    switch (type) {
        case Types.SET_MONTHS: {
            state = data;
            return state;
        }
        default: return state;
    }
}
export const reducerSetInteret = (state = interet, { type, payload }) => {
    switch (type) {
        case Types.SET_INTERET: {
            state = payload;
            return state;
        }
        default: return state;
    }
}
export const reducerActualData = (state = actualData, { type, payload }) => {
    switch (type) {
        case Types.ACTUAL_DATA: {
            state = payload;
            return state;
        }
        default: return state;
    }
}
