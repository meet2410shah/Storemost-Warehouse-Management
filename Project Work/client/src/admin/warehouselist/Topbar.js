import React from 'react';
import "./details.css";
import { Link,useHistory } from "react-router-dom";

function Topbar(){
    return (
            <div className = "main-logo-div">
                <Link> <img src = "./sort.svg" className ="logo-side-img"/></Link>{" "}
                <img src = "./SM-Warehouse-Logo.png" className ="logo-side-img-2"/>
            </div>
            )
        }
export default Topbar;
