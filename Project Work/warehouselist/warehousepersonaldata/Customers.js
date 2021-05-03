import React from 'react';
import {useState} from 'react';
import { Link,useHistory } from "react-router-dom";
import "./customets.css";
import CustomersData from "./customersdata"
import Name from "./customersname"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Topbar from "./../Topbar";
import Sidebar from "./../Sidebar";

function Customers() {
    return(          
        <div className = "background2">
            {/* for logo */}
           {/* <div className = "logo2">
                <h1>Logo</h1>
            </div>*/}

            {/*title*/}
            <br/>
          { /* <div className = "customers-main-div">
                <Link to = "./Staff" className = "title2">Staff</Link>
                <Link to = "./Customers" className = "title2">Farmers</Link>
        </div>*/}

            {/*Result*/}
            <br/>
            <div className = "namemaindiv">
               <div className = "name-2nd-main-div">
                 <div className = "admin-name-3rd-main-div">
                    <input type = "checkbox" className = "admin-check"></input>
                    <h1 className = "admin-hader20" >Name</h1>
                    <h1 className = "admin-hader21">Deposit</h1>
                    <h1 className = "admin-hader22">No. of Crops</h1>
                    <h1 className = "admin-hader22">Contact</h1>
                    <h1 className = "admin-hader23">Address</h1>
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