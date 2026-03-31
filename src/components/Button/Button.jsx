import React from "react";
import "./Button.css";

function Button({ children, onClick, variant = "primary", type = "button", disabled = false }) {
  return (
    <button
      type={type}
      className={`btn btn-${variant} ${disabled ? "disabled" : ""}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;