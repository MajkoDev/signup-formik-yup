import React from "react";
import "./textfield.css";
import { useField } from "formik";

function TextField({ label, ...props }) {
  const [field, meta] = useField(props);
  console.log(field, meta);

  return (
    <div className="input">
      <label htmlFor={field.name}>{label}</label>
      <input autoComplete="off" {...field} {...props} />
      <br/>
    </div>
  );
}

export default TextField;
