import React from "react";
import "./ImageUpload.css";

function ImageUpload(props) {
  return (
    <div className="form-control">
      <input id={props.id} style={{ display: "none" }} type="file" />
    </div>
  );
}

export default ImageUpload;
