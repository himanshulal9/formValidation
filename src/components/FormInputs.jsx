import React from "react";
import "./FormInput.css";

export default function FormInputs(props) {
  return (
    <div className="formInput">
      <label htmlFor="name"></label>
      <input
        type="text"
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </div>
  );
}
