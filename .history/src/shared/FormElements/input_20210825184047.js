import React from "react";

function input(props) {

    const element = props.element === 'input' ? <input id={props.id} type={props.type} placeholder={ props.placeholder}/>

  return (
    <div className={`form-control`}>
      <label htmlFor={props.id}>{props.label}</label>
      {element}
    </div>
  );
}

export default input;
