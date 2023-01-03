import React, { useState } from 'react'
import "./Calculator.css"

function Calculator() {
    const [result, setResult] = useState("");

    function HandleClick(e) {
        setResult(result.concat(e.target.innerHTML));
    }

    function HandleClear() {
        setResult("");
    }

    function Calculate() {
        setResult(eval(result).toString());
    }

    return (
        <div className='container'>
                <input placeholder='0' value={result}></input>
                
                <div className='btn double' onClick={HandleClear}>Clear</div>
                <div className='btn' onClick={HandleClick}>%</div>
                <div className='btn' onClick={HandleClick}>/</div>

                <div className='btn' onClick={HandleClick}>7</div>
                <div className='btn' onClick={HandleClick}>8</div>
                <div className='btn' onClick={HandleClick}>9</div>
                <div className='btn' onClick={HandleClick}>*</div>

                <div className='btn' onClick={HandleClick}>4</div>
                <div className='btn' onClick={HandleClick}>5</div>
                <div className='btn' onClick={HandleClick}>6</div>
                <div className='btn' onClick={HandleClick}>-</div>

                <div className='btn' onClick={HandleClick}>1</div>
                <div className='btn' onClick={HandleClick}>2</div>
                <div className='btn' onClick={HandleClick}>3</div>
                <div className='btn' onClick={HandleClick}>+</div>

                <div className='btn double' onClick={HandleClick}>0</div>
                <div className='btn' onClick={HandleClick}>.</div>
                <div className='btn equal' onClick={Calculate}>=</div>
            </div>
    )
}

export default Calculator
