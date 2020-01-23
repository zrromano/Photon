import React from "react";

export default props =>
  props.images.map((image, i) => (
    <div key={i} className="fadein">
      <div
        onClick={() => props.removeImage(image.public_id)}
        className="delete"
      >
        <i className="fa fa-times-circle" aria-hidden="true" />
      </div>
      <img src={image.secure_url} alt="" />
    </div>
  ));
