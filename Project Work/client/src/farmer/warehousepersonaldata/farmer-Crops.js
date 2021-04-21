import React from 'react';
import {useState} from 'react';
import { Link,useHistory } from "react-router-dom";
import "./farmer-crops.css";
import CropsData from   "./farmer-cropsdata"
import CropsName from "./farmer-cropsname"
/*import CustomerscropsName from "./Customerscropsname"
import CustomersData from "./customersdata"*/

function Crops() {
    return(
        <div className = "background3">
            {/* for logo */}
           {/* <div className = "logo3">
                <h1>Logo</h1>
            </div>*/}
            
            {/*title*/}
            <div>
                <h1 className = "title3">My Crops</h1>
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
            
            <div className = "contenar">
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