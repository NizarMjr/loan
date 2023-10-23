import { Types } from "./Types"

export const productID = (payload) => {
    return {
        type: Types.PRODUCT_ID,
        payload: payload,
    }
}
export const setProductName = (payload) => {
    return {
        type: Types.SET_PRODUCT,
        payload: payload,
    }
}
export const set_amount = (payload) => {
    return {
        type: Types.SET_AMOUNT,
        data: {
            'min': payload.min_amount,
            'max': payload.max_amount,
        },
    }
}
export const set_month = (payload) => {
    return {
        type: Types.SET_MONTHS,
        data: {
            'min': payload.min_tenure,
            'max': payload.max_tenure,
        },
    }
}
export const actual_data = (amount, month) => {
    return {
        type: Types.ACTUAL_DATA,
        payload: {
            'amount': amount,
            'month': month,
        }
    }
}
export const set_data = (payload) => {
    return {
        type: Types.SET_DATA,
        payload: payload,
    }
}
export const set_interet = (payload) => {
    return {
        type: Types.SET_INTERET,
        payload: payload,
    }
}
export const set_total = (payload) => {
    return {
        type: Types.TOTAL,
        payload: payload,
    }
}
