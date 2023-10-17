import { Types } from "./Types"

export const setProductName = (payload) => {
    return {
        type: Types.SET_PRODUCT,
        payload: payload,
    }
}
export const set_amount = (payload) => {
    return {
        type: Types.SET_AMOUNT,
        payload: payload,
    }
}
export const set_month = (payload) => {
    return {
        type: Types.SET_MONTHS,
        payload: payload,
    }
}