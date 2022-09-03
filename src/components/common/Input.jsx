import React from "react";

const Input = ({ name, label, error, ...rest }) => {
   return (
      <div className="form-group">
         <h4 className="mb-1" htmlFor={name}>{label}</h4>
         <input {...rest} name={name} id={name} className="form-control" />
         {error && <div className="alert alert-danger">{error}</div>}
      </div>
   );
};

export default Input;