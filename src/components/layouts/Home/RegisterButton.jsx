import React from 'react';
const RegisterButton = (props) => {
  return (
    <div className="theButtons">
      <button className="RegisterBtn"
      onClick={props.handleClick}
      >
        Register
      </button>
    </div>
  );
}


export default RegisterButton;