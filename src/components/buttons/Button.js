import React from 'react';
import './Button.css';

function Button({ label, onClick, className }) {
  return (
    <button className={`custom-button ${className}`} onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;