import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setProductName, set_amount, set_month } from "../redux/Actions";

const Product = () => {
    const [data, setData] = useState([]);
    const dispatch = useDispatch()

    useEffect(() => {
        axios.get('../products.json').then(res => setData(res.data)).catch(err => console.log(err.message));
    }, [])

    const setProduct = (product, data) => {
        dispatch(setProductName(product));
        dispatch(set_amount(data.max_amount))
        dispatch(set_month(data.min_tenure))
    }
    return (
        <main className="pt-8 flex justify-between items-center w-[16.375rem] h-[5.375rem] mx-auto">
            <img onClick={() => setProduct('automobile', data[1])} className="h-full max-w-[86px] max-h-[86px] cursor-pointer" src={data[1]?.image} alt="logo" />
            <img onClick={() => setProduct('cash', data[2])} className="h-full max-w-[86px] max-h-[86px] cursor-pointer" src={data[2]?.image} alt="logo" />
            <img onClick={() => setProduct('housing', data[0])} className="h-full max-w-[86px] max-h-[86px] cursor-pointer" src={data[0]?.image} alt="logo" />
        </main>
    )
}
export default Product;