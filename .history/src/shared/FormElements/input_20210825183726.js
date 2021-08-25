import React from "react";

function input(props) {
  return (
    <div className={`form-control`}>
      <label htmlFor={props.id} rows={props.rows || 3}>
        {props.label}
      </label>
      {element}
    </div>
  );
}

export default input;
