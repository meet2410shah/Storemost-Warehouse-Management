import React from "react";
import {useState} from 'react';
import { Link,useHistory } from "react-router-dom";
import Sidebar from "./supervisor-Sidebar"
import Topbar from "./supervisor-Topbar" 
/*import Details  from "./details" 
import Staff  from "./warehousepersonaldata/Staff" 
import Customers  from "./warehousepersonaldata/Customers" 
import Crops  from "./warehousepersonaldata/Crops" 
import Open  from "./warehousepersonaldata/Open" */
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function supervisorbar() {
    return(
        <React.Fragment>
             <Router>
                <Topbar />
                <Sidebar />
            </Router>
        </ React.Fragment>
    );
}
export default supervisorbar;