import React from "react";
import "./Input.css";

function Input({ id, label, type = "text", value, onChange, placeholder, icon, required = false }) {
  return (
    <div className="input-wrapper">
      {label && (
        <label className="input-label" htmlFor={id}>
          {label}
          {required && " *"}
        </label>
      )}
      <div className="input-field-group">
        {icon && <span className="input-icon">{icon}</span>}
        <input
          id={id}
          className={`input-field ${icon ? "with-icon" : ""}`}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
        />
      </div>
    </div>
  );
}

export default Input;