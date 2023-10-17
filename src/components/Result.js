import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Result = () => {
    const getMonthFromRedux = useSelector(state => state.getMonth)
    const getAmountFromRedux = useSelector(state => state.getAmount)

    const [result, setResult] = useState();

    useEffect(() => {
        setResult(getAmountFromRedux * getMonthFromRedux)
    }, [getAmountFromRedux, getMonthFromRedux])

    return (
        <main className="sm:p-6 sm:mt-0 mt-36">
            <div className="mx-10 flex justify-between items-center mb-6">
                <h2 className="sm:text-xl flex-1 flex-1">Monthly amount</h2>
                <span className="text-result font-bold text-4xl">${result}</span>
            </div>
            <p className="px-8 py-6 bg-desktop py-8 px-12 text-sm">You’re planning <span className="font-bold">{getMonthFromRedux} monthly deposits</span> to reach your <span className="font-bold">${getAmountFromRedux}</span> goal by <span className="font-bold">July 2022</span>. The total amount loaned will be <span className="font-bold">$26,300</span></p>
        </main>
    )
}
export default Result;