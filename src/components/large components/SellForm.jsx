import React, { setState } from "react";
import Joi from "joi-browser";
import Form from "../common/Form";
import { Link } from "react-router-dom";

class SellForm extends Form {
   state = {
      data: { name: "", description: "", pic: "" },
      file: "",
      errors: {}
   };
   schema = {
      name: Joi.string()
         .required()
         .min(5)
         .label("Name"),
      description: Joi.string()
         .required()
         .min(5)
         .label("Description"),
      pic: Joi.string()
         .label("picture")
   };

   doSubmit = () => {
      try {
         const { data } = this.state;
         const newItem = { owner: this.props.user._id, pic: this.state.file, name: data.name, description: data.description, steps: 0 }
         this.props.handleSell(newItem);
         window.location = "/Market";
      } catch (ex) {
         if (ex.response && ex.response.status === 400) {
            const errors = { ...this.state.errors };
            errors.username = ex.response.data;
            errors.password = ex.response.data;
            this.setState({ errors });
         }
      }
   };

   render() {
      return (
         <div>
            <div>
               <div className="mt-5 d-flex justify-content-center">
                  <div className="col-6">
                     <h2 className="mt-5 ">Sell</h2>
                     <p className="mb-5">A thousand miles begins with a single step</p>
                     <form onSubmit={this.handleSubmit}>
                        {this.renderInput("name", "Name")}
                        {this.renderInput("description", "Description")}
                        <input
                           type="file"
                           name="pic"
                           onChange={(event) => {
                              const file = event.target.files[0];
                              console.log(file);
                              setState({ file });
                           }}
                        />
                        <div className="mt-5 d-flex justify-content-between">
                           <a href="/Market">
                              <btn onClick={this.doSubmit} className="btn btn-outline-success">
                                 Sell
                              </btn>
                           </a>
                        </div>

                     </form>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

export default SellForm;
