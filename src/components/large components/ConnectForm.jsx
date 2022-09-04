import React from "react";
import Joi from "joi-browser";
import Form from "../common/Form";

class ConnectForm extends Form {
   state = {
      data: { to: this.props.id, comment: "" },
      errors: {}
   };
   schema = {
      comment: Joi.string()
         .label("Comment")
         .max(250)
   };



   render() {
      console.log(this.props)
      return (
         <div>
            <div>
               <div className="mt-5 d-flex justify-content-center">
                  <div className="col-8">
                     <h2 className="mt-5 mb-5">{ }</h2>
                     <form className="mt-5" onSubmit={this.handleSubmit}>
                        {this.renderInput("comment", "Chat with buyer!")}
                        <small className="">You can see their reply in your inbox</small>
                        <div className="mt-3 d-flex justify-content-between">
                           <btn onClick={() => this.props.handleMessage(this.state.data)} className="btn btn-outline-success">
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

export default ConnectForm;
