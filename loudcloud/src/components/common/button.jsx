import React from "react";

const Button = ({ onChange }) => {
  return (
    <div className="buttons fadein">
      <div className="button">
        <label htmlFor="single">
          <i
            className="fa fa-image"
            style={{ color: "#3B5998", size: "10x" }}
          />
        </label>
        <input type="file" id="single" onChange={onChange} />
      </div>

      <div className="button">
        <label htmlFor="multi">
          <i
            className="fa fa-image"
            style={{ color: "#6d84b4", size: "10x" }}
          />
        </label>
        <input type="file" id="multi" onChange={onChange} multiple />
      </div>
    </div>
  );
};

export default Button;
