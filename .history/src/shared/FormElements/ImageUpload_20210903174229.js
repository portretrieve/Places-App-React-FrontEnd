import React from "react";
import "./ImageUpload.css";
import Button from "./Button";

function ImageUpload(props) {
  return (
    <div className="form-control">
      <input
        id={props.id}
        style={{ display: "none" }}
        type="file"
        accept=".jpg, .png, .jpeg"
      />
    </div>
  );
}

export default ImageUpload;
