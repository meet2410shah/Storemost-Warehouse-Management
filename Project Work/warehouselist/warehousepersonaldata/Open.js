import React from 'react';
import {useState} from 'react';
import { Link,useHistory } from "react-router-dom";
import "./open.css";

function Open() {
    return(
        <div>
           {/* <div className = "lst-div-back">

             </div>*/}
        <div className = "admin-maincon">
            <div>
                <Link  to = "./admin-crops" className = "cros-class">
                    X
                </Link>
            </div>
            <div className = "contaner">
            {/* Img and name */}
                <div className = "img-open-div">
                     <img src ="./crop.png" className ="crop-open-img"/>
                </div>
            
                <div className = "div-img-3">
                    <h1 className = "cropxyz">Crop XYZ</h1><br/>
                    <Link className = "divbutten">ReNew</Link>
                </div>
            </div>

            {/* Details */}
            <div>
                <br/>
                <div className = "admin-divhadd">
                    <div className = "admin-hadd1">Warehouse </div> 
                    <div className = "admin-hadd2">Warehouse 3</div>
                </div>
                <div className = "admin-divhadd">
                    <div className = "admin-hadd1">Amount</div> 
                    <div className = "admin-hadd2">21 tons</div>
                </div>
                <div className = "admin-divhadd">
                    <div className = "admin-hadd1">Deposit Date</div> 
                    <div className = "admin-hadd2">21/11/2020</div>
                </div>
                <div className = "admin-divhadd">
                    <div className = "admin-hadd1">Due Date</div> 
                    <div className = "admin-hadd2">01/04/2021</div>
                </div>
                <div className = "admin-divhadd">
                    <div className = "admin-hadd1">Condition</div> 
                    <div className = "admin-hadd2">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum </div>
                </div>
            </div>
        </div></div>
    );   
}

export default Open;