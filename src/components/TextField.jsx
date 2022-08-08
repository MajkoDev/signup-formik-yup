import React from "react";
import "./textfield.css";
import { ErrorMessage, useField } from "formik";

function TextField({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <div className="field">
      <label htmlFor={field.name}>{label}</label>
      <input
        className={`form-control ${meta.touched && meta.error && "isValid"}`}
        autoComplete="off"
        {...field}
        {...props}
      />
      <ErrorMessage component="div" className="error" name={field.name} />

      <br />
    </div>
  );
}

export default TextField;
