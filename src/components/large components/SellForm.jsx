import React from "react";
import Joi from "joi-browser";
import Form from "../common/Form";
import { Link } from "react-router-dom";

class SellForm extends Form {
   state = {
      data: { name: "", description: "", pic: "" },
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
         return () => this.props.handleSell(data.pic, data.name, data.description);
         //window.location = "/Market";
      } catch (ex) {
         if (ex.response && ex.response.status === 400) {
            const errors = { ...this.state.errors };
            errors.username = ex.response.data;
            errors.password = ex.response.data;
            this.setState({ errors });
         }
      }
   };

   /*doDemo = async () => {
      try {
         await auth.login("Guest-Demo", "peaceful-raisin");
         toast.success('🦄 You are all set! Your temp username: "Guest-Demo" Your temp password: "peaceful-raisin"', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
         });
         setTimeout(() => {
            window.location = "/MessageBoard";
         }, 5000)
      } catch (ex) {
         if (ex.response && ex.response.status === 400) {
            const errors = { ...this.state.errors };
            errors.username = ex.response.data;
            errors.password = ex.response.data;
            this.setState({ errors });
         }
      }
   };*/

   render() {
      return (
         <div>
            <div>
               <div className="mt-5 d-flex justify-content-center">
                  <div className="col-6">
                     <h2 className="mt-5 mb-5">Sell</h2>
                     <form onSubmit={this.handleSubmit}>
                        {this.renderInput("name", "Name")}
                        {this.renderInput("description", "Description")}
                        <form>
                           <div class="form-group">
                              <h4>Upload a picture</h4>
                              <input type="file" class="form-control-file mt-2" id="exampleFormControlFile1"></input>
                           </div>
                        </form>
                        <div className="mt-5 d-flex justify-content-between">
                           <Link to="/Market">
                              <btn onClick={() => this.doSubmit()} className="btn btn-outline-success">
                                 Sell
                              </btn>
                           </Link>
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
