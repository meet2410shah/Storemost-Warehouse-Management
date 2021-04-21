import React from 'react';
import { Link,useHistory } from "react-router-dom";
import "./supervisor-staff.css";

function Name(params) {
    return(
        <div className = "supervisor-main-contan">
                <h2 className = "supervisor-pargra" >{params.name} </h2>
                <h2 className = "supervisor-pargra" >{params.position}</h2>
                <h2 className = "supervisor-pargra221" >{params.contact}</h2>
            </div>
    );
}

export default Name;