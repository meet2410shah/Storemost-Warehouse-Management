import React from "react";
import "./App.scss";
import style from "./components/admin/style.scss"
import Login  from "./components/admin/login" 
import Register from "./components/admin/register"
import Details  from "./components/admin/WarehouseData/details" 
import Staff  from "./components/admin/WarehouseData/WarehousepersonalData/Staff" 
import Customers  from "./components/admin/WarehouseData/WarehousepersonalData/Customers" 
import Crops  from "./components/admin/WarehouseData/WarehousepersonalData/Crops" 
import Open  from "./components/admin/WarehouseData/WarehousepersonalData/Open" 
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";

class App extends React.Component {
     render(){
        return(
         <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
                <Route path="/details" component={Details}/>
                <Route path="/staff" component={Staff}/>
                <Route path="/customers" component={Customers}/>
                <Route path="/crops" component={Crops}/>
                <Route path="/open" component={Open}/>
			   </Switch>
         </BrowserRouter>
       )
     }
};

export default App;