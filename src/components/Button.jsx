import React from 'react';
import './Button.css';

export default function Button({ children, onClick, type = 'button', variant = 'primary', className = '', disabled = false }) {
  return (
    <button 
      className={`ui-button ${variant} ${className}`} 
      onClick={disabled ? undefined : onClick} 
      type={type} 
      disabled={disabled}
    >
      {children}
    </button>
  );
}
