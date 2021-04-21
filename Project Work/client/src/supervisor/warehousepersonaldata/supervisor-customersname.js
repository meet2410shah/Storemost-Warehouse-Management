import React from 'react';
import { Link,useHistory } from "react-router-dom";
import "./supervisor-customets.css";

function Name(params) {
    return(
        <div className = "supervisor-contan2">
            <input type = "checkbox" className = "supervisor-check2"></input>
            <Link to = "./supervisor-crops" className = "supervisor-pargra20" >{params.name} </Link>
            <p className = "supervisor-pargra21" >{params.Deposit}</p>
            <p className = "supervisor-pargra21" >{params.NoofCrops}</p>
            <p className = "supervisor-pargraph-22" >{params.contact} </p>
            <p className = "supervisor-pargra23" >{params.Address}</p>
        </div>
    );
}

export default Name;