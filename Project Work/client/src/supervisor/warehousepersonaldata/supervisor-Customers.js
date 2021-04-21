import React from 'react';
import {useState} from 'react';
import { Link,useHistory } from "react-router-dom";
import "./supervisor-customets.css";
import CustomersData from "./supervisor-customersdata"
import Name from "./supervisor-customersname"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Topbar from "../supervisor-Topbar";
import Sidebar from "../supervisor-Sidebar";

function Customers() {
    return(          
        <div className = "supervisor-background2">
            {/* for logo */}
           {/* <div className = "logo2">
                <h1>Logo</h1>
            </div>*/}
            <h1 className = "supervisor-title-h1">List of Farmers using Warehoue #3</h1>
            {/*title*/}
            <br/>
          { /* <div className = "customers-main-div">
                <Link to = "./Staff" className = "title2">Staff</Link>
                <Link to = "./Customers" className = "title2">Farmers</Link>
        </div>*/}

            {/*Result*/}
            <br/>
            <div className = "supervisor-namemaindiv">
               <div className = "supervisor-name-2nd-main-div">
                 <div className = "supervisor-name-3rd-main-div">
                    <input type = "checkbox" className = "supervisor-check"></input>
                    <h1 className = "supervisor-hade20" >Name</h1>
                    <h1 className = "supervisor-hade21">Deposit</h1>
                    <h1 className = "supervisor-hade21">No. of Crops</h1>
                    <h1 className = "supervisor-hade21">Contact</h1>
                    <h1 className = "supervisor-hade22">Address</h1>
                </div>

                {CustomersData.map((val,index) => {
                    return (
                        <Name
                            name = {val.name}
                            Deposit = {val.Deposit}
                            NoofCrops = {val.NoofCrops}
                            contact = {val.contact}
                            Address = {val.Address}
                        />  
                    );
            })}
            </div>
            </div>
        </div>                    
      
    );
}

export default Customers;