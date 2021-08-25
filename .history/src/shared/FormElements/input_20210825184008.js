import React from "react";

function input(props) {

    const element = props.element === 'input' ? <input type={ props.type}/>

  return (
    <div className={`form-control`}>
      <label htmlFor={props.id}>{props.label}</label>
      {element}
    </div>
  );
}

export default input;
