import React from "react";
import "./ImageUpload.css";

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
