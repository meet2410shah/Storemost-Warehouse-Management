import React from 'react';
import "./details.scss";
import { Link,useHistory } from "react-router-dom";

function Name(params) {
    return(
        <div className = "conta">
            <Link to = "./Staff"className = "link"> WareHouse {params.id}  </Link> 
            <h2 className = "addr"> Address:</h2>
            <h2 className = "addr2"> {params.Address1}</h2>
            <h2 className = "addr2"> {params.Address2} </h2>
            <h3 className = "occp"> {params.occupied} % occupied</h3>
            <h2 className = "addr3"> {params.Address3}</h2>
        </div>             
    );
}

export default Name;
