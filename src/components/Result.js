import React, { useEffect, useState } from "react";
import { act } from "react-dom/test-utils";
import { useDispatch, useSelector } from "react-redux";
import { showElements } from "../redux/Actions";

const Result = () => {
    const dispatch = useDispatch();
    const actualData = useSelector(state => state.actualData);
    const id = useSelector(state => state.productID)
    const [result, setResult] = useState('');
    const [total, setTotal] = useState('');
    const [amount, setAmount] = useState('');
    const interet = useSelector(state => state.getInteret);

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const date = {
        'year': new Date().getFullYear(),
        'month': monthNames[new Date().getMonth()],
    }

    useEffect(() => {
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
        setAmount(formatter.format(actualData.amount));
        const n_total = (parseInt(actualData.amount) + (parseInt(actualData.amount) * parseInt(interet) / 1000));
        setTotal(formatter.format(n_total))
        const res = Math.round(parseInt(n_total / actualData.month));
        setResult(formatter.format(res).substring(0, 6));
    }, [actualData, id])

    return (
        <main className={` sm:mt-0 mt-36 sm:w-[480px] w-80 mx-auto `}>
            <div className="pt-8 border border-border rounded">
                <div className="mx-10 flex justify-between items-center mb-6">
                    <h2 className="sm:text-xl flex-1 flex-1">Monthly amount</h2>
                    <span className="text-result font-bold sm:text-4xl text-2xl">{result}</span>
                </div>
                <p className="px-8 py-6 bg-desktop py-8 px-12 text-sm">You’re planning <span className="font-bold">{actualData.month} monthly deposits</span> to reach your <span className="font-bold">{amount}</span> goal by <span className="font-bold">{date.month} {date.year}</span>. The total amount loaned will be <span className="font-bold">{total}</span></p>
            </div>
            <button className="block w-80 h-14 bg-title text-white mx-auto rounded-full mt-4">Apply Now</button>
        </main>
    )
}
export default Result;