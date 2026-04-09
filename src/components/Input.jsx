import React from 'react';
import './Input.css';

export default function Input({ label, type = 'text', value, onChange, placeholder, name, options, className = '' }) {
  if (type === 'radio' && options) {
    return (
      <div className={`ui-input-wrapper ${className}`}>
        {label && <label className="ui-input-label">{label}</label>}
        <div className="ui-radio-group">
          {options.map((option) => (
            <label key={option.value} className="ui-radio-wrapper">
              <input
                type="radio"
                name={name}
                value={option.value}
                checked={value === option.value}
                onChange={onChange}
                className="ui-radio-input"
              />
              {option.label}
            </label>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={`ui-input-wrapper ${className}`}>
      {label && <label className="ui-input-label">{label}</label>}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="ui-input-field"
      />
    </div>
  );
}
