import React from 'react';
import {useState} from 'react';
import { Link,useHistory } from "react-router-dom";
import "./staff.css";
import StaffData from   "./staffdata"
import Name from "./staffname"

function Staff() {
    return(
        <div className = "background">
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

            {/*Result*/}
            
            <div className = "main-div-for-line">
             <div className = "admin-namediv">
                <h1 className = "admin-hade1">Name</h1>
                <h1 className = "admin-hade1">Position</h1>
                <h1 className = "admin-hade12">Contact</h1>
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