import React from 'react';
import {useState} from 'react';
import { Link,useHistory } from "react-router-dom";
import "./staff.scss";
import StaffData from   "./staffdata"
import Name from "./staffname"

function Staff() {
    return(
        <div className = "background">
            {/* for logo */}
            <div className = "logo">
                <h1>Logo</h1>
            </div>

            {/*title*/}
            <div>
                <Link to = "./Staff" className = "title">Staff</Link>
                <Link to = "./Customers" className = "title">Customers</Link>
            </div>

            {/*Result*/}
            <div>
                <br/><br/>
                <h1 className = "hade1">Name</h1>
                <h1 className = "hade1">Position</h1>
                <h1 className = "hade1">Contact</h1>
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
            })}
        </div>
    );
}

export default Staff;