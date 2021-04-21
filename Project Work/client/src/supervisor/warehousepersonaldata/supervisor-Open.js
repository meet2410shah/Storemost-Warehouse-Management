import React from 'react';
import {useState} from 'react';
import { Link,useHistory } from "react-router-dom";
import "./supervisor-open.css";

function Open() {
    return(
        <div>
           {/* <div className = "lst-div-back">

             </div>*/}
        <div className = "supervisor-maincon">
            <div>
                <Link  to = "./supervisor-crops" className = "supervisor-cros-class">
                    X
                </Link>
            </div>
            <div className = "supervisor-contaner">
            {/* Img and name */}
                <div className = "supervisor-img-open-div">
                     <img src ="./crop.png" className ="supervisor-crop-open-img"/>
                </div>
            
                <div className = "supervisor-div-img-3">
                    <h1 className = "supervisor-cropxyz">Crop XYZ</h1><br/>
                    <Link className = "supervisor-divbutten">ReNew</Link>
                </div>
            </div>

            {/* Details */}
            <div>
                <br/>
                <div className = "supervisor-divhadd">
                    <div className = "supervisor-hadd1">Warehouse </div> 
                    <div className = "supervisor-hadd2">Warehouse 3</div>
                </div>
                <div className = "supervisor-divhadd">
                    <div className = "supervisor-hadd1">Amount</div> 
                    <div className = "supervisor-hadd2">21 tons</div>
                </div>
                <div className = "supervisor-divhadd">
                    <div className = "supervisor-hadd1">Deposit Date</div> 
                    <div className = "supervisor-hadd2">21/11/2020</div>
                </div>
                <div className = "supervisor-divhadd">
                    <div className = "supervisor-hadd1">Due Date</div> 
                    <div className = "supervisor-hadd2">01/04/2021</div>
                </div>
                <div className = "supervisor-divhadd">
                    <div className = "supervisor-hadd1">Condition</div> 
                    <div className = "supervisor-hadd2">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum </div>
                </div>
            </div>
        </div></div>
    );   
}

export default Open;