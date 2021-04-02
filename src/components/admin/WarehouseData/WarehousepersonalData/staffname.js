import React from 'react';
import { Link,useHistory } from "react-router-dom";
import "./staff.scss";

function Name(params) {
    return(
        <div className = "contan">
                <p className = "par" >{params.name} </p>
                <p className = "par" >{params.position}</p>
                <p className = "par" >{params.contact}</p>
            </div>
    );
}

export default Name;