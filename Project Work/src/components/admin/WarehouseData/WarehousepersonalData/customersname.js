import React from 'react';
import { Link,useHistory } from "react-router-dom";
import "./customets.scss";

function Name(params) {
    return(
        <div className = "contan2">
            <input type = "checkbox" className = "check2"></input>
            <p className = "par2" >{params.name} </p>
            <p className = "par2" >{params.Deposit}</p>
            <p className = "par2" >{params.NoofCrops}</p>
            <p className = "par2" >{params.contact} </p>
            <p className = "par2" >{params.CropList}</p>
            <p className = "par2" >{params.DueDate}</p>
        </div>
    );
}

export default Name;