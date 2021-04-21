import React from 'react';
import "./farmer-details.css";
import {useState} from 'react';
import { Link,useHistory } from "react-router-dom";
import Name from "./farmer-Warehousename"
import Data from "./farmer-Data"


function Details(){
    return (
        <div className = "main-background">
            {/*LOGO */}
           {/* <div className = "main-logo-div">
                <img src = "./sort.svg" className ="logo-side-img"/>{" "}
                <img src = "./SM-Warehouse-Logo.png" className ="logo-side-img-2"/>
            </div>
            <br/>
            <div className = "main-slied-bar-div">
                 <div className = "side-bar-div"> 
                    <div className = "details-img-person">
                        <img src = "./person.svg" className = "buttenclass" />
                    </div>
                    <div className = "details-img">
                         <img src = "./inventory.svg" className = "buttenclass" />
                    </div>
                    <div className = "details-img">
                        <img src = "./logout.svg" className = "buttenclass" />
                    </div>
            </div>
    <div className = "main-search-div">*/}
            {/*Search bar */}
            <div className = "farmer-searchdiv">
                {/*<input type = "text" placeholder = "Search" className = "input"/>   */}
                <div className = "result-div">Showing Warehouses near you</div>          
            </div>
            <div className = "farmer-buttendiv">
                <button className = "btnsort">
                    Filter{" "}<img src = "./filter.svg" className ="filterimg"/>
                </button>
                <button className = "farmer-btnsort">
                    Sort{" "}<img src = "./sort.svg" className ="filterimg"/>
                </button>
            </div>

            {/*Result */}
            <div>
               <br/> <br/>
                {Data.map((val,index) => {
                    return (
                        <Name
                            id = {val.id}
                            Address1 = {val.Address1}
                            occupied = {val.occupied}
                            number = {val.number}
                    />  
                    );
                })}
            </div>
           {/* </div>
           </div>*/}
        </div>
    );
}

export default Details;