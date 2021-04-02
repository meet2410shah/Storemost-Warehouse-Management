import React from 'react';
import {useState} from 'react';
import { Link,useHistory } from "react-router-dom";
import "./customets.scss";
import CustomersData from   "./customersdata"
import Name from "./customersname"

function Customers() {
    return(
        <div className = "background2">
            {/* for logo */}
            <div className = "logo2">
                <h1>Logo</h1>
            </div>

            {/*title*/}
            <div>
                <Link to = "./Staff" className = "title2">Staff</Link>
                <Link to = "./Customers" className = "title2">Customers</Link>
            </div>

            {/*Result*/}
            <div>
                <br/><br/>
                <input type = "checkbox" className = "check"></input>
                <h1 className = "hade2" >Name</h1>
                <h1 className = "hade2">{" "}{" "}{" "}Deposit</h1>
                <h1 className = "hade2">No. of Crops</h1>
                <h1 className = "hade2">Contact</h1>
                <h1 className = "hade2">{" "}Crop List</h1>
                <h1 className = "hade2"> Due Date</h1>
            </div>

            <br/>
                {CustomersData.map((val,index) => {
                    return (
                        <Name
                            name = {val.name}
                            Deposit = {val.Deposit}
                            NoofCrops = {val.NoofCrops}
                            contact = {val.contact}
                            CropList = {val.CropList}
                            DueDate = {val.DueDate}
                        />  
                    );
            })}

        </div>
    );
}

export default Customers;