import React from "react";

const Button = props => {
 return (
  <button 
  style={{ float: "left", marginBottom: 10 }} 
  className={`btn ${props.btnColor}`}
  >
  
  {props.children}
  </button>
   
);
}

export default Button;