import React from 'react';
import { Link,useHistory } from "react-router-dom";
import "./customets.css";

function Name(params) {
    return(
        <div className = "admin-contan2">
            <input type = "checkbox" className = "admin-check2"></input>
            <Link to = "./admin-crops" className = "admin-par20" >{params.name} </Link>
            <p className = "admin-par21" >{params.Deposit}</p>
            <p className = "admin-par22" >{params.NoofCrops}</p>
            <p className = "admin-par23" >{params.contact} </p>
            <p className = "admin-par24" >{params.Address}</p>
        </div>
    );
}

export default Name;