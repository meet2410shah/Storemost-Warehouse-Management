import React from 'react';
import "./details.css";
import { Link,useHistory,Route,Switch } from "react-router-dom";
// import Staffcustomers from "./warehousepersonaldata/Staffcustomers"


function Name(params) {
    return(


        <div className = "admin-name-main-conta">
             <div className = "warehouse-img">
             </div>
             <div className = "admin-warehouse-details-div">
             <div className = "admin-flex-1st-div">
                 <Link to = "/admin-Staffcustomers" className = "admin-link"> WareHouse {params.id}  </Link>
                 <p className = "admin-occupied"> {params.occupied} % occupied</p>
            </div>
            <div className = "admin-flex-2nd-div">
                 <h2 className = "admin-addr"> Address:</h2>
                 <h2 className = "admin-addr2"> {params.Address1}</h2>
            </div>
        </div>
        </div>



    );
}

export default Name;
