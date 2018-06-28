import React from 'react';
const RegisterButton = (props) => {
  return (
    <div className="theButtons">
      <button className="RegisterBtn"
      onClick={props.handleClick}
      >
        Let's get started
      </button>
    </div>
  );
}


export default RegisterButton;