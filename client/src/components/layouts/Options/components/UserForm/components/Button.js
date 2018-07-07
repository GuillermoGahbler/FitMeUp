import React from "react";

const Button = props => {
 return (
  <button {...props}
  style={{ float: "left", marginBottom: 10 }} 
  className={`btn ${props.btncolor}`} 
  >
  
  {props.children}
  </button>
   
);

}

export default Button;