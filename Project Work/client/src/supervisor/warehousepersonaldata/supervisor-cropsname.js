import React from 'react';
import { Link,useHistory } from "react-router-dom";
import "./supervisor-customets.css";
import "./supervisor-crops.css";

function CropsName(params) {
    return(
        <div className = "supervisor-contan3">
            <p className = "supervisor-divimg">
               <Link to = "./supervisor-open"> 
                    <img src = "./crop.png" className = "supervisor-crop-img"/> 
                </Link>
            </p>
            <p className = "supervisor-par3" >Crop {params.name} </p>
            <p className = "supervisor-par3" >{params.ava} Tons</p>
        </div>
    );
}

export default CropsName;