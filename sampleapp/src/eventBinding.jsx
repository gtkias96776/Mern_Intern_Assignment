import React from "react";
export default function eventBinding(){
    function ShowAlert(){
        alert('Button clicked using EventBinding')
    }
    const sample=()=>{console.log('Arrow function called')}
    const clickHandler=()=>{sample();ShowAlert()}
    return(
        <div>
            <button onClick={clickHandler.bind(this)}></button>
        </div>
    )
}