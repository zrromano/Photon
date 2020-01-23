import React from "react";

const Input = ({ name, label, colSize, smalltext, error, ...rest }) => {
  const classes = "form-group" + (colSize ? ` col-${colSize}` : "");
  return (
    <div className={classes}>
      <label htmlFor={name}>{label}</label>
      <input
        autoFocus
        id={name}
        name={name}
        {...rest}
        className="form-control"
      />
      {{ smalltext } && (
        <small id="smallText" className="form-text text-muted">
          {smalltext}
        </small>
      )}
      {error && (
        <small id={`${name}Error`} className="form-text text-danger">
          {error}
        </small>
      )}
    </div>
  );
};

export default Input;
