

import React, { Component } from 'react';



class Optionspayment extends Component {
    constructor(props) {
        super(props);

    }

   

    render() {
        return (

            
            
            <div className="bg-dark newheight">
               <div className="jumbotron text-center bg-dark text-white">
                     <h1 className="white"> PAYMENT OPTIONS </h1>
               </div>
               <div className=" container-md mt-3 ">
                    <div className="row " >
                    <div className="col-sm-4 w-100 ">
                    <div className="card mx-auto text-center  border-top-0 border-bottom-0 border-left-0" >
                        <div className="bg-dark">
                         <img src='/images/credit_score.png' className= "img-fluid h-75 rounded-circle p-5 yup" alt="..." />
                         </div> 
                        <div className="card-body   bg-dark text-white">
                        <h5 className="text-center card-title font"> Instant</h5>
                          <h5 className="text-center card-title font"> Payment</h5>
                           <p className="mx-auto text-center w-50 card-text  textcolor">Instantly request for space to store your crop into your wareshouse</p>
                           <a href="#" className=" btn  but btn-dark but">Select</a>
                         </div>
                        
                    </div>
                    </div>

                    <div className="col-sm-4 w-100 ">
                    <div className="card  text-center  border-top-0 border-bottom-0 border-left-0" >
                        <div className="bg-dark ">
                         <img src='/images/replay.png' className= " img-fluid rounded-circle h-75 p-4 yup" alt="..." />
                         </div> 
                        <div className="card-body   bg-dark text-white">
                        <h5 className="text-center card-title font"> Crop</h5>
                          <h5 className="text-center card-title font"> Renewal</h5>
                           <p className="mx-auto text-center w-50 card-text  textcolor ">Instantly request for space to store your crop into your wareshouse</p>
                           <a href="#" className=" btn  but btn-dark  but">Select</a>
                         </div>
                        
                    </div>
                    </div>

                    <div className="col-sm-4 w-100 ">
                    <div className="card  text-center border-0" >
                        <div className="bg-dark ">
                         <img src='/images/credit_score.png' className= " img-fluid h-75 rounded-circle p-5 yup" alt="..." />
                         </div> 
                        <div className="card-body   bg-dark text-white">
                          <h5 className="text-center card-title font"> Advance</h5>
                          <h5 className="text-center card-title font"> Payment</h5>
                           <p className="mx-auto text-center w-50 card-text textcolor  ">Instantly request for space to store your crop into your wareshouse</p>
                           <a href="#" className=" btn  but btn-dark  but">Select</a>
                         </div>
                        
                    </div>
                    </div>
                        
                    </div>

                </div>
             
            </div>
        );
    }
}


export default Optionspayment;