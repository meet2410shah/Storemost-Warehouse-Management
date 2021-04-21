import React from 'react';
import { Link,useHistory } from "react-router-dom";
import "./supervisor-crops.css";

function CustomerscropsName(params) {
    return(
        <div>
            <h1 className = "supervisor-title3">{params.name} Crop's</h1>
        </div>
    );
}

export default CustomerscropsName;