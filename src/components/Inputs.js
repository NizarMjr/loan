import axios from "axios";
import React, { useEffect, useState } from "react";
import { RiArrowRightSLine, RiArrowLeftSLine } from 'react-icons/ri'
import { useDispatch, useSelector } from "react-redux";
import { set_amount, set_month } from "../redux/Actions";

const Inputs = () => {
    const [data, setData] = useState([]);
    const dispatch = useDispatch()
    const [amount, setAmount] = useState();
    const productName = useSelector(state => state.productName)
    const [productInfo, setProductInfo] = useState()
    const [months, setMonths] = useState('')
    const getMonthFromRedux = useSelector(state => state.getMonth)
    const getAmountFromRedux = useSelector(state => state.getAmount)

    useEffect(() => {
        axios.get('../products.json').then(res => setData(res.data)).catch(err => console.log(err.message))
        if (productName === 'automobile')
            setProductInfo(data[1]);

        else if (productName === 'cash') setProductInfo(data[0]);
        else setProductInfo(data[2]);
    }, [productName])

    useEffect(() => {
        setMonths(getMonthFromRedux)
        setAmount(getAmountFromRedux)
    }, [productInfo])

    const increaseMonths = () => {
        if (parseInt(months) < productInfo.max_tenure)
            setMonths(e => parseInt(e) + 1);
    }
    const decreaseMonths = () => {
        if (parseInt(months) > productInfo.min_tenure)
            setMonths(e => parseInt(e) - 1);
    }
    useEffect(() => {
        if (months && amount) {
            dispatch(set_amount(amount));
            dispatch(set_month(months));
        }

    }, [amount, months])
    return (
        <main className="sm:mx-10 mx-4 sm:flex justify-between items-center my-8 h-[81px]">
            <div className="sm:basis-3/4 flex flex-col sm:items-center ">
                <label className="mb-4">Loan amount</label>
                <input onChange={(e) => setAmount(e.target.value)} value={amount} className="border border-border h-[56px] pl-4" type="number" placeholder="$" required />
            </div>
            <div className="relative flex flex-col sm:items-center">
                <label className="mb-4">Number of Months</label>
                <span onClick={() => increaseMonths()} className="absolute left-0 top-1/2 translate-y-1/2 text-xl cursor-pointer"><RiArrowLeftSLine /></span>
                <input className="text-center w-full border border-border h-[56px] pl-4" type="number" required value={parseInt(months)} />
                <span onClick={() => decreaseMonths()} className="absolute right-0 top-1/2 translate-y-1/2 text-xl cursor-pointer"><RiArrowRightSLine /></span>
            </div>
        </main>
    )
}
export default Inputs;