import React from "react";
import {useState} from 'react';
import { Link,useHistory } from "react-router-dom";
import Sidebar from "./farmer-Sidebar"
import Topbar from "./farmer-Topbar" 
import Details  from "./farmer-details" 
/*import Staff  from "./warehousepersonaldata/Staff" 
import Customers  from "./warehousepersonaldata/Customers" */
import Crops  from "./warehousepersonaldata/farmer-Crops" 
import Open  from "./warehousepersonaldata/farmer-Open" 
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function bar() {
    return(
        <React.Fragment>
             <Router>
                <Topbar />
                <Sidebar />
            </Router>
        </ React.Fragment>
    );
}
export default bar;