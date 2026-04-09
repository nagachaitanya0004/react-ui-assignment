import { memo } from "react";
import "./Input.css";

const Input = memo(function Input({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  name,
  error = "",
  required = false,
}) {
  return (
    <div className="input">
      {label ? (
        <label className="input__label" htmlFor={name}>
          {label}
          {required && <span className="input__required">*</span>}
        </label>
      ) : null}
      <input
        id={name}
        className={`input__field ${error ? "input__field--error" : ""}`}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        required={required}
      />
      {error ? <p className="input__error">{error}</p> : null}
    </div>
  );
});

Input.displayName = "Input";

export default Input;
