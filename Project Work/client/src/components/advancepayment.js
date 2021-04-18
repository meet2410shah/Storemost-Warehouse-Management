import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Advancepayment extends Component {
    constructor(props) {
        super(props);
        this.state={
           Crop:"",
           Warehouse:"",
           Amount:"",
           Deposit:"",
           DueDate:"",
           Condition:""
        }
       
        this.handleChange=this.handleChange.bind(this);
    }
    handleChange(event){
        this.setState({
            [event.target.name]:event.target.value
        })

    }

    
    render() {
        return (
            <div className="header bg-dark">
            <div class="container p-3 m-3 text-light">
                 <div class="row">
                     <div class="col-sm-2  text-right"> <img className= "img-fluid h-75 rounded-circle p-4 yup" src='/images/card_membership.png' alt='credit'></img></div>
                     <div className="col-sm-0 box"></div>
                     <div class="col-sm-9"> 
                         <h1 className="instant1">Advance Payment</h1>
                         <p className="text-secondary h5 ">Reserve space for your crops in advance with just a reasonable amount in deposit now!</p>
                    </div>
                     
                </div>
            </div>
           <div className="container-fluid text-light">
            <form className="w-100">
                <div className="form-group row border-bottom ml-3 mr-5">
                 <label htmlFor="Crop" className="col-sm-2 ml-3 h5">Crop</label>
                 <div className="col-sm-8 ">
                    <input type="text" className="form-control instant2" name="Crop" value={this.state.Crop} onChange={this.handleChange}></input>
                 </div>
                </div>

                <div className="form-group row border-bottom ml-3 mr-5">
                 <label htmlFor="Warehouse" className="col-sm-2 ml-3 h5">Warehouse</label>
                 <div className="col-sm-8">
                    <input type="text" className="form-control instant2" name="Warehouse" value={this.state.Warehouse} onChange={this.handleChange}  />
                 </div>
                </div>

                <div className="form-group row border-bottom ml-3 mr-5">
                 <label htmlFor="Amount" className="col-sm-2 ml-3 h5">Amount</label>
                 <div className="col-sm-8">
                    <input type="number" className="form-control w-25 instant2" name="Amount" value={this.state.Amount} onChange={this.handleChange} />
                 </div>
                </div>
                

                <div className="form-group row border-bottom ml-3 mr-5">
                 <label htmlFor="Deposit" className="col-sm-2 ml-3 h5">Deposit Date</label>
                 <div className="col-sm-8">
                    <input type="date" className="form-control instant2" name="Deposit" value={this.state.Deposit} onChange={this.handleChange} />
                 </div>
                </div>

                <div className="form-group row border-bottom ml-3 mr-5">
                 <label htmlFor="DueDate" className="col-sm-2 ml-3 h5">Due Date</label>
                 <div className="col-sm-8">
                    <input type="date" className="form-control instant2"name="DueDate" value={this.state.DueDate} onChange={this.handleChange} />
                 </div>
                </div>

                <div className="form-group row ml-3 mr-5">
                 <label htmlFor="Condition" className="col-sm-2 ml-3 h5">Condition</label>
                 <div className="col-sm-8">
                    <textarea type="comment" className="form-control w-50 instant2"  name="Condition" value={this.state.Condition}onChange={this.handleChange} />
                 </div>
                </div>
            </form>
            </div>
            <div className="row ml-3">
               <div className="col-sm-2 ml-4"><a href="/" className="btn-lg btn-dark  but text-decoration-none">Proceed</a></div>
               <div className="col-sm-8 text-left"><a href="/" className="btn-lg btn-dark  text-decoration-none  ">Cancel</a></div>
               
            </div>
          

            </div>
        );
    }
}



export default Advancepayment;