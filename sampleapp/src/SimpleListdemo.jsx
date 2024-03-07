import React from "react";
const Names=[
    {id:101,name:'GTK'},
    {id:102,name:'TK'},
    {id:103,name:'Thirukumaran'},
    {id:104,name:'Thirukumaran G'}
];

export default function SimpleListdemo(){
    return(
        <div>
            <h2>Employee Name List are </h2>
            <ul>
            {Names.map(data=>(
                <li className="removedot" key={data.id}>{data.id} &nbsp;{data.name};</li>
            ))}
            </ul>
        </div>
        
    )
}