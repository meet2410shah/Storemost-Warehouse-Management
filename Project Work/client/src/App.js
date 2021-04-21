import React from "react";
import style from "./admin/adminlogin/style.css"
import Login  from "./admin/adminlogin/adminlogin" 
import Register from "./admin/adminlogin/adminregister"
import Details  from "./admin/warehouselist/details" 
import Staff  from "./admin/warehouselist/warehousepersonaldata/Staff" 
import Customers  from "./admin/warehouselist/warehousepersonaldata/Customers" 
import StaffCustomers from "./admin/warehouselist/warehousepersonaldata/Staffcustomers"
import Crops  from "./admin/warehouselist/warehousepersonaldata/Crops" 
import Open  from "./admin/warehouselist/warehousepersonaldata/Open" 
import { BrowserRouter, Route, Switch } from "react-router-dom";
import sidebar from "./admin/warehouselist/Sidebar"
import bar from "./admin/warehouselist/bar";
import supervisorbar from "./supervisor/supervisor-bar";
import farmerbar from "./farmer/farmer-bar";
//import { Link } from "react-router-dom";

function App() {
        return(
         <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route exact path="/admin-login" component={Login}/>
                <Route exact path="/admin-register" component={Register}/>
                <Route exact path="/admin-details" component={bar}/>
                <Route exact path="/admin-staff" component={Staff}/>
                <Route exact path="/admin-customers" component={Customers}/>
                <Route exact path="/admin-crops" component={Crops}/>
                <Route exact path="/admin-open" component={Open}/>
                <Route exact path="/admin-bar" component={bar}/>
                <Route exact path="/supervisor-bar" component={supervisorbar}/>
                <Route exact path="/farmer-bar" component={farmerbar}/>
			      </Switch>
         </BrowserRouter>
       )
};

export default App;