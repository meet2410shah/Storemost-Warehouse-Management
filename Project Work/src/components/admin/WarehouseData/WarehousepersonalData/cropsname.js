import React from 'react';
import { Link,useHistory } from "react-router-dom";
import "./customets.scss";

function Name(params) {
    return(
        <div className = "contan3">
            <p className = "divimg">Image</p>
            {/*<img src = {params.imgsrc} atc = "No Image" />*/}
            <p className = "par3" >Crop {params.name} </p>
            <p className = "par3" >{params.ava} Tons</p>
            <Link to = "./open" className = "open">Open</Link>
        </div>
    );
}

export default Name;