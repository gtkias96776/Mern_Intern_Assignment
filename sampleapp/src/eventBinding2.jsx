import {event} from 'jquery';

import React, { useState }from "react";

const eventBinding2()=>{
    const [inputValue,setInputValue]=useState('');

    const handleInputChange=(event)=>{
        event.preventDefault();
        alert(`form Submitted : ${inputValue}`);
    }
    return(
        <div>
            <form onSubmit=(handleSubmit)>
                <label>Enter the name </label>
                <input type="text" onChange=(handleInputChange)>
                </input>
                <button type>Register</button>
            </form>
        </div>
    )
}