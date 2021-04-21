import React from 'react';
import "./farmer-Sidebar.css";
import { Link,useHistory } from "react-router-dom";
import Details from './farmer-details';
/*import Staff  from "./warehousepersonaldata/Staff" ;
import Customers  from "./warehousepersonaldata/Customers" ;*/
import Crops  from "./warehousepersonaldata/farmer-Crops" ;
import Open  from "./warehousepersonaldata/farmer-Open" ;
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
/*import Staffcustomers from './warehousepersonaldata/Staffcustomers';
import Staffcustomers2 from './warehousepersonaldata/Staffcustomers2';*/

function Sidebar(){
    return (
            <div className = "main-slied-bar-div">
                 <div className = "side-bar-div"> 
                    <div className = "details-img-person">
                      <img src = "./person.svg" className = "buttenclass" />
                    </div>
                    <div className = "details-img">
                        <Link to = "./farmer-crops">  
                            <img src = "./crop.png" className = "buttenclass" />
                        </Link> 
                    </div>
                    <div className = "details-img">
                        <Link to = "./farmer-details">  
                            <img src = "./warehouselist.svg" className = "buttenclass" />
                        </Link> 
                    </div>
                    <div className = "details-img">
                        <Link>  
                            <img src = "./payment.svg" className = "buttenclass" />
                        </Link> 
                    </div>
                    <div className = "details-img">
                        <img src = "./logout.svg" className = "buttenclass" />
                    </div>
            </div>
            <Switch>
                    <Route exact path="/farmer-bar" component={Crops}/>
                    <Route exact path="/farmer-details" component={Details}/>
                    {/*<Route exact path="/admin-staffcustomers" component={Staffcustomers}/>
                    <Route exact path="/admin-customers" component={Staffcustomers2}/>*/}
                    <Route exact path="/farmer-crops" component={Crops}/>
                    <Route exact path="/farmer-open" component={Open}/>
			   </Switch>
            </div>
            )
        }

export default Sidebar;