import React from "react";
import Product from "./Product";
import Inputs from "./Inputs";
import Result from "./Result";

const Card = () => {
    return (
        <main className="mt-4 bg-white rounded-lg sm:w-card-desktop w-full sm:h-card-desktop h-card-mobile px-6">
            <Product />
            <Inputs />
            <Result />
        </main>
    )
}
export default Card;