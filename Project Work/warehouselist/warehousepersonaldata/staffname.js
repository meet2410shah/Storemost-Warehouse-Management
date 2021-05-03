import React from 'react';
import { Link,useHistory } from "react-router-dom";
import "./staff.css";

function Name(params) {
    return(
        <div className = "admin-main-contan">
                <h2 className = "admin-pargra" >{params.name} </h2>
                <h2 className = "admin-pargra" >{params.position}</h2>
                <h2 className = "admin-pargra22" >{params.contact}</h2>
            </div>
    );
}

export default Name;