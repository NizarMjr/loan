import React, { useEffect, useState } from "react";
import { RiArrowRightSLine, RiArrowLeftSLine } from 'react-icons/ri'
import { useDispatch, useSelector } from "react-redux";
import ArrowKeysReact from 'arrow-keys-react';
import { actual_data, showElements } from "../redux/Actions";


const Inputs = () => {
    const dispatch = useDispatch();
    const minMonth = useSelector(state => state.getMonth.min)
    const minAmount = useSelector(state => state.getAmount.min)
    const maxMonth = useSelector(state => state.getMonth.max)
    const maxAmount = useSelector(state => state.getAmount.max)
    const [months, setMonths] = useState();
    const [amount, setAmount] = useState();



    useEffect(() => {
        setMonths(minMonth);
    }, [minAmount, minMonth])

    const increaseMonths = () => {
        if (parseInt(months) >= parseInt(minMonth) && parseInt(months) < parseInt(maxMonth)) {
            setMonths(e => parseInt(e) + 1);
            dispatch(actual_data(amount ? amount : maxAmount, months))
            console.log(amount);
        }
    }
    const decreaseMonths = () => {
        if (parseInt(months) > parseInt(minMonth) && parseInt(months) <= parseInt(maxMonth)) {
            setMonths(e => parseInt(e) - 1);
            dispatch(actual_data(amount ? amount : maxAmount, months))
        }
    }
    const changeAmount = (e) => {
        if (e <= parseInt(maxAmount)) {
            setAmount(e);
            dispatch(actual_data(e != 0 ? e : maxAmount, months))
        }
    }
    const changetMonths = (e) => {
        ArrowKeysReact.config({
            up: () => {
                if (parseInt(months) < maxAmount)
                    setMonths(e);
            },
            down: () => {
                if (parseInt(months) > minAmount)
                    setMonths(e);
            }
        });
    }
    return (
        <main className={`mx-auto sm:w-[480px] w-80 sm:flex justify-between items-center my-8 h-[81px]`}>
            <div className="sm:w-3/4 sm:mr-4 flex flex-col sm:items-center ">
                <label className="mb-4">Loan amount</label>
                <input value={amount} onChange={(e) => changeAmount(e.target.value)} className="w-full border border-border h-[56px] pl-4" type="number" required placeholder={`$${maxAmount}`} />
            </div>
            <div className="relative flex flex-col sm:items-center sm:w-1/2" >
                <label className="mb-4">Number of Months</label>
                <span onClick={() => increaseMonths()} className="absolute left-0 top-1/2 translate-y-1/2 text-xl cursor-pointer"><RiArrowLeftSLine /></span>
                <input value={months} className="text-center w-full border border-border h-[56px] pl-4" type="number" required onChange={(e) => changetMonths(e.target.value)} />
                <span onClick={() => decreaseMonths()} className="absolute right-0 top-1/2 translate-y-1/2 text-xl cursor-pointer"><RiArrowRightSLine /></span>
            </div>
        </main>
    )
}
export default Inputs;