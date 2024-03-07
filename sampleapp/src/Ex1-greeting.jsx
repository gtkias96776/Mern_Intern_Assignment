import React from "react";
import './Ex1-greeting.css';

export default function Greeting(props){
    return(
        <div id="greet">
            <h3>Demo for creating the functional component</h3>
            <p>Functional component without parameter or properties</p>
            <h3>PROP VALUES</h3>
            <h3>Name: {props.name}</h3>
            <h3>Gender: {props.gender}</h3>
        </div>
    )
}