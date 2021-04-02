import React from 'react';
import {useState} from 'react';
import { Link,useHistory } from "react-router-dom";
import "./open.scss";

function Open() {
    return(
        <div className = "maincon">
            {/* Img and name */}
            <div>
            <h1 className = "divimg2">Image</h1>
            </div>
            <div className = "divimg3">
            <h1 className = "cropxyz">Crop XYZ</h1><br/>
            <Link className = "divbutten">ReNew</Link>
            </div>

            {/* Details */}
            <div>
                <br/><br/><br/>
                <div className = "divhadd">
                    <div className = "hadd1">Warehouse </div> 
                    <div className = "hadd2">Warehouse 3</div>
                </div>
                <div className = "divhadd">
                    <div className = "hadd1">Amount</div> 
                    <div className = "hadd2">21 tons</div>
                </div>
                <div className = "divhadd">
                    <div className = "hadd1">Deposit Date</div> 
                    <div className = "hadd2">21/11/2020</div>
                </div>
                <div className = "divhadd">
                    <div className = "hadd1">Due Date</div> 
                    <div className = "hadd2">01/04/2021</div>
                </div>
                <div className = "divhadd">
                    <div className = "hadd1">Condition</div> 
                    <div className = "hadd2">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum </div>
                </div>
            </div>

        </div>
    );   
}

export default Open;