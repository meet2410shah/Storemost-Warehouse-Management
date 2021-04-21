import React from 'react';
import backButton from "./backButton.png"
import "./warehouseList.css"
import storeLogo from "./storeLogo.png"

const WareList = () =>{


const warehouseList = [
  {
    warehouseId: 1,
    capacity: "3000 Quintal",
    available: "1020 Quintal",
    address: "Lorem ip. Ut enim ad minnt in culpa qui officia deserunt mollit anim id est laborum.",
    mobile: "+2736487903870"
  },
  {
    warehouseId: 2,
    capacity: "6020 Quintal",
    available: "1000 Quintal",
    address: "Lorem ip. Ut enim ad minnt in culpa qui officia deserunt mollit anim qui officia deserunt mollit anim id est laborum.",
    mobile: "+54780903870"
  },
  {
    warehouseId: 3,
    capacity: "1000 Quintal",
    available: "100 Quintal",
    address: "Lorem ip. Ut enim ad minnt in culpa qui officia deserunt mollit anim id est laborum.",
    mobile: "+54677903870"
  },
  {
    warehouseId: 4,
    capacity: "10000 Quintal",
    available: "2056 Quintal",
    address: "Lorem ip. Ut enim ad minnt in culpa qui officia deserunt mollit animqui officia deserunt mollit animqui officia deserunt mollit anim id est laborum.",
    mobile: "+09809487903870"
  },
  {
    warehouseId: 5,
    capacity: "10000 Quintal",
    available: "2056 Quintal",
    address: "Lorem ip. Ut enim ad minnt in culpa qui officia deserunt mollit animqui officia deserunt mollit animqui officia deserunt mollit anim id est laborum.",
    mobile: "+09809487903870"
  },
  {
    warehouseId: 6,
    capacity: "10000 Quintal",
    available: "2056 Quintal",
    address: "Lorem ip. Ut enim ad minnt in culpa qui officia deserunt mollit animqui officia deserunt mollit animqui officia deserunt mollit anim id est laborum.",
    mobile: "+09809487903870"
  },
  {
    warehouseId: 7,
    capacity: "10000 Quintal",
    available: "2056 Quintal",
    address: "Lorem ip. Ut enim ad minnt in culpa qui officia deserunt mollit animqui officia deserunt mollit animqui officia deserunt mollit anim id est laborum.",
    mobile: "+09809487903870"
  },
  {
    warehouseId: 8,
    capacity: "10000 Quintal",
    available: "2056 Quintal",
    address: "Lorem ip. Ut enim ad minnt in culpa qui officia deserunt mollit animqui officia deserunt mollit animqui officia deserunt mollit anim id est laborum.",
    mobile: "+09809487903870"
  },
]

    return(
        <>
        <img src={backButton} alt="Avatar" className="backButton" id="img" />
        <img src={storeLogo} alt="Avatar" className="storeLogo" id="img" />
        <h2 className="heading"> <span className="colorChange"> Warehouses </span> Near you </h2>


        <div className="wrapper">


        {warehouseList.map((eachWare) => (



        <div className="wareBox">



        <h2 className="colorChange boxHead"> Warehouse {eachWare.warehouseId} </h2>


          <table className="table">

            <tr>
              <td className="boxLeft">
                <p> Capacity : </p>
              </td>
              <td className="boxRight">
                <p> {eachWare.capacity} </p>
              </td>
            </tr>


            <tr>
              <td className="boxLeft">
                <p> Available : </p>
              </td>
              <td className="boxRight">
                <p> {eachWare.available} </p>
              </td>
            </tr>


            <tr>
              <td className="boxLeft addressHead">
                <p> Address : </p>
              </td>
              <td className="boxRight">
                <p className="addressBox"> {eachWare.address} </p>
              </td>
            </tr>

            <tr>
              <td className="boxLeft">
                <p> Supervisor : </p>
              </td>
              <td className="boxRight">
                <p> {eachWare.mobile} </p>
              </td>
            </tr>

          </table>


          </div>


          ))}

        </div>

        </>
    )
}

export default WareList;
