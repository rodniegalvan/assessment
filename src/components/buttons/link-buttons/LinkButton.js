import React from "react";
import "./LinkButton.css";

function LinkButton({ onClick, label }) {
  return (
    <button className="resend-button" onClick={onClick}>
      {label}
    </button>
  );
}

export default LinkButton;
