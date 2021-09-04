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
      <div className={`image-upload ${props.center && "center"}`}>
        <div className="image-upload__preview">
          <img src="" alt="Preview" />
        </div>
        <Button>PICK IMAGE</Button>
      </div>
    </div>
  );
}

export default ImageUpload;
