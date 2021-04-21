import React from 'react';
import {useState} from 'react';
import { Link,useHistory } from "react-router-dom";
import "./supervisor-crops.css";
import CropsData from   "./supervisor-cropsdata"
import CropsName from "./supervisor-cropsname"
import CustomerscropsName from "./supervisor-Customerscropsname"
import CustomersData from "./supervisor-customersdata"

function Crops() {
    return(
        <div className = "supervisor-background3">
            {/* for logo */}
           {/* <div className = "logo3">
                <h1>Logo</h1>
            </div>*/}
            
            {/*title*/}
            <div>
                <h1 className = "supervisor-title3">My Crops</h1>
           </div>

            {/*Result*/}

            {/* <div>
                {CustomersData.map((val,index) => {
                    return (
                        <CustomerscropsName
                            name = {val.name}
                        />  
                    );
            })}
            </div>*/}
            
            <div className = "supervisor-contenar">
                {CropsData.map((val,index) => {
                    return (
                        <CropsName
                            //imgsrc = {val.imgsrc}
                            name = {val.name}
                            ava = {val.ava}
                        />  
                    );
            })}
        </div>
        </div>
    );
}

export default Crops;