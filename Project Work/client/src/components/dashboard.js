
import React, { Component } from 'react';


class Dashboard extends Component {
   

    

    render() {
        return (
            <div  className="header bg-dark">
            <header>
             <nav className="navbar navbar-style">
                <div className="container-fluid ml-5 mr-5">
                    <div className="navbar-header">

                        <a href="/"><img className="logo img-responsive" src="./images/SMWarehouseLogo.png"></img></a>
                    </div>
                    <ul className="nav navbar-right mr-5 text-light">
                      <li className="nav-item "><a  className="nav-link but" href="">Contact</a></li>
                      <li className="nav-item  "><a  className="nav-link but" href="">About Us</a></li>

                    </ul>

                </div>
             </nav>
           
             <div className="container-fluid mt-5">
                <div className="row m-5">
                    <div className="col col-sm-6 pl-5">
                      
                    <a href="/"><img className="d-inline img-fluid" src="./images/machine.png"></img><h1 className="square"></h1></a>
                    
                    </div>
                    <div className="col col-sm-5 text-light ml-5 ">

                   <span className="font-weight-bold d3">we<span className="square1 ml-4"></span><span className="square2 ml-1"></span><span className="square4 ml-4"></span><span className="square7 ml-4"></span></span><br/>
                   <span className="font-weight-bold d3 mt-0 ml-4">value<span className="square5 ml-4"></span></span>
                   <br/>
                   <span className="font-weight-bold d3">your<span className="square3 ml-1"></span></span>
                   <br/>
                   <span className="font-weight-bold d3 mt-0 ml-4">resouces<span className="square6 ml-1"></span></span>
                    
                    </div>

                </div>
                

             </div>
              
              <div className="container-fluid ml-5 ">
                <div class="row text-center align-self-start ml-5 ">
                    <div class="col-sm-2 bor">
                      <a href="/" className="d  text-light font-weight-bold">Continue as Farmer</a>
                    </div>
                    
                    <div class="col-sm-2 align-self-center bor">
                       <a  href="/" className="d  text-light font-weight-bold ">Log in as Supervisor</a>
                    </div>
                    <div class="col-sm-6 text-center  ">
                      <a href="/" className="text-light text-decoration-none">Actively operating over 21 warehouses</a>
                    </div>
                    
   
                </div>
                <div className="m-3">
                <a href="/" className=" d1 m-5">View NearBy Warehouses</a>
                </div>
                
              </div>

            </header>
             
            

           </div>
        );
    }
}


export default Dashboard;