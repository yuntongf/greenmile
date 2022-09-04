import React from "react";
import Joi from "joi-browser";
import Form from "../common/Form";
import { toast } from 'react-toastify';
import auth from '../../services/AuthService';

class LoginForm extends Form {
   state = {
      data: { username: "", password: "" },
      errors: {}
   };
   schema = {
      username: Joi.string()
         .required()
         .min(3)
         .label("Username"),
      password: Joi.string()
         .required()
         .min(5)
         .label("Password")
   };

   doSubmit = async () => {
      try {
         const { data } = this.state;
         await auth.login(data.username, data.password);
         toast.success('🦄 You are all set!', {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
         });
         window.location = "/MessageBoard";
      } catch (ex) {
         if (ex.response && ex.response.status === 400) {
            const errors = { ...this.state.errors };
            errors.username = ex.response.data;
            errors.password = ex.response.data;
            this.setState({ errors });
         }
      }
   };

   doDemo = async () => {
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
   };

   render() {
      return (
         <div>
            <div>
               <div className="mt-5 d-flex justify-content-center">
                  <div className="col-6">
                     <h2 className="mt-5 mb-5">Log in</h2>
                     <form onSubmit={this.handleSubmit}>
                        {this.renderInput("username", "Username")}
                        {this.renderInput("password", "Password", "password")}
                        <div className="mt-5 d-flex justify-content-between">
                           <a href="/Market">
                              <btn onClick={() => this.doSubmit()} className="btn btn-outline-success">
                                 Log in
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

export default LoginForm;
