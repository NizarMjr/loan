import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actual_data, productID, set_amount, set_month } from "../redux/Actions";

const Product = () => {
    const dispatch = useDispatch()
    const [data, setData] = useState([])
    const [active, setActive] = useState(true);

    useEffect(() => {
        axios.get('../products.json').then(res => setData(res.data));
    }, [])

    const setProduct = (id, sec_id) => {
        dispatch(productID(id))
        dispatch(set_amount(data[id]));
        dispatch(set_month(data[id]));
        dispatch(actual_data(data[id].max_amount, data[id].min_tenure))
        const IMAGES = document.getElementsByClassName('image');
        for (let i = 0; i < IMAGES.length; i++) {
            if (IMAGES[i].classList.contains('border-result') && IMAGES[i].classList.remove('border-2')) {
                IMAGES[i].classList.remove('border-2');
                IMAGES[i].classList.remove('border-result');
            }

        }
        IMAGES[sec_id].classList.add('border-2');
        IMAGES[sec_id].classList.add('border-result');
    }
    return (
        <main className="pt-8 flex justify-evenly items-center w-[16.375rem] h-[5.375rem] mx-auto">
            <img onClick={() => setProduct(1, '0')} className={`image border-2 border-result h-full max-w-[86px] max-h-[86px] cursor-pointer rounded-xl  `} src={data[1]?.image} alt="logo" />
            <img onClick={() => setProduct(2, '1')} className={`image h-full max-w-[86px] max-h-[86px] cursor-pointer rounded-xl`} src={data[2]?.image} alt="logo" />
            <img onClick={() => setProduct(0, '2')} className={`image h-full max-w-[86px] max-h-[86px] cursor-pointer rounded-xl `} src={data[0]?.image} alt="logo" />
        </main>
    )
}
export default Product;