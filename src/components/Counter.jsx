import './Counter.css';
import {useState} from 'react';

export default function Counter(){

    var [counterValue,setCounterValue]=useState(5);

    function handlePlus(){
        setCounterValue(counterValue+1);

    };
    function handleMinus(){
        setCounterValue(counterValue-1);

    };
    return(
        <div className="counter-container">
            <div className="button-minus" onClick={() => handleMinus()}>-</div>
            <div className="counter">{counterValue}</div>
            <div className="button-plus" onClick={() => handlePlus()}>+</div>
        </div>
    )
    
};