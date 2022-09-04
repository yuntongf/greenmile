import React from "react";
import Joi from "joi-browser";
import Form from "../common/Form";
import { Link } from "react-router-dom";

class PriceForm extends Form {
   state = {
      data: { item: this.props.item._id, price: "", comment: "" },
      errors: {}
   };
   schema = {
      price: Joi.string()
         .required()
         .label("Price"),
      comment: Joi.string()
         .label("Comment")
         .max(250)
   };



   render() {
      return (
         <div>
            <div>
               <div className="mt-5 d-flex justify-content-center">
                  <div className="col-8">
                     <h2 className="mt-5 mb-5">{ }</h2>
                     <form className="mt-5" onSubmit={this.handleSubmit}>
                        {this.renderInput("price", "Your price")}
                        {this.renderInput("comment", "Your comment")}
                        <small className="">Seller will contact you if they are willing to sell</small>
                        <div className="mt-3 d-flex justify-content-between">
                           <btn onClick={() => this.props.handlePrice(this.state.data)} className="btn btn-outline-success">
                              Send
                           </btn>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

export default PriceForm;
