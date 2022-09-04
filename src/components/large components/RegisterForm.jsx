import React from "react";
import Joi from "joi-browser";
import Form from "../common/Form";
import { Link } from "react-router-dom";
import { register } from "../../services/UserService";

class RegisterForm extends Form {
   state = {
      data: { username: "", password: "", steps: 0 },
      errors: {}
   };
   schema = {
      username: Joi.string()
         .required()
         .min(5)
         .label("Username"),
      password: Joi.string()
         .required()
         .label("Password")
         .max(250)
   };

   doSubmit = async () => {
      try {
         const temp = await register(this.state.data)
         window.location = "/Market";
      } catch (ex) {
         console.log("register failed...", ex);
      }
   };

   render() {
      return (
         <div>
            <div>
               <div className="mt-5 d-flex justify-content-center">
                  <div className="col-8">
                     <h2 className="mt-5 mb-5">Hi there!</h2>
                     <form className="mt-5" onSubmit={this.handleSubmit}>
                        {this.renderInput("username", "Username")}
                        {this.renderInput("password", "Password")}
                        <div className="mt-3 d-flex justify-content-between">

                           <btn onClick={() => this.doSubmit()} className="btn btn-outline-success">
                              Register
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

export default RegisterForm;
