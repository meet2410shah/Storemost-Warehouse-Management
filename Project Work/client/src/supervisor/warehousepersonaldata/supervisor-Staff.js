import React from 'react';
import {useState} from 'react';
import { Link,useHistory } from "react-router-dom";
import "./supervisor-staff.css";
import StaffData from "./supervisor-staffdata"
import Name from "./supervisor-staffname"

function Staff() {
    return(
        <div className = "supervisor-background">
            {/* for logo */}
            {/* <div className = "logo">
                <h1>Logo</h1>
            </div>*/}
            <br/>
            {/*title*/}
           {/* <div className = "staff-main-div">
                <Link to = "./Staff" className = "title">Staff</Link>
                <Link to = "./Customers" className = "title">Customers</Link>
            </div>*/}
            <h1 className = "supervisor-staff-details-h1">Staff Details</h1>
            {/*Result*/}
            
            <div className = "supervisor-main-div-for-line">
             <div className = "supervisor-namediv">
                <h1 className = "supervisor-hade1">Name</h1>
                <h1 className = "supervisor-hade1">Position</h1>
                <h1 className = "supervisor-hade12">Contact</h1>
             </div>
            <br/>
                {StaffData.map((val,index) => {
                    return (
                        <Name
                            name = {val.name}
                            position = {val.position}
                            contact = {val.contact}
                        />  
                        );
                    }
                 )
               }
        </div></div>
    );
}

export default Staff;