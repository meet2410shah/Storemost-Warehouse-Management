import React from 'react';
import "./details.scss";
import {useState} from 'react';
import { Link,useHistory } from "react-router-dom";
import Name from "./Warehousename"
import Data from "./Data"


function Details(){
    return (
        <div className = "background">
            {/*LOGO */}
            <div className = "logodetail">Logo</div>
            <div className = "vandit2">
            <div className = "sibol"> 
                <div className = "detailsimg">img 1</div>
                <div className = "detailsimg">img 2</div>
                <div className = "detailsimg">img 3</div>
            </div>
            <div className = "vandit">
            {/*Search bar */}
            <div>
                <input type = "text" placeholder = "Search" className = "input"/>             
            </div>

            {/*Result */}
            <div>
               <br/> <br/>
                {Data.map((val,index) => {
                    return (
                        <Name
                            id = {val.id}
                            Address1 = {val.Address1}
                            Address2 = {val.Address2}
                            occupied = {val.occupied}
                            Address3 = {val.Address3}
                    />  
                    );
                })}
            </div></div>
            </div>
        </div>
    );
}

export default Details;