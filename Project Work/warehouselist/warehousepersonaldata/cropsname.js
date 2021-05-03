import React from 'react';
import { Link,useHistory } from "react-router-dom";
import "./customets.css";
import "./crops.css";

function CropsName(params) {
    return(
        <div className = "contan3">
            <p className = "divimg">
               <Link to = "./admin-open"> <img src = "./crop.png" className = "crop-img"/> </Link>
            </p>
            <p className = "par3" >Crop {params.name} </p>
            <p className = "par3" >{params.ava} Tons</p>
        </div>
    );
}

export default CropsName;