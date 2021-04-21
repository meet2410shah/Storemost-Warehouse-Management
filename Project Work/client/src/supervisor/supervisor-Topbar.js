import React from 'react';
import "./supervisor-details.css";
import { Link,useHistory } from "react-router-dom";

function Topbar(){
    return (
            <div className = "supervisor-main-logo-div">
                <Link> <img src = "./sort.svg" className ="supervisor-logo-side-img"/></Link>{" "}
                <img src = "./SM-Warehouse-Logo.png" className ="supervisor-logo-side-img-2"/>
            </div>
            )
        }
export default Topbar;
