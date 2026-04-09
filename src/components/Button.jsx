import { memo } from "react";
import "./Button.css";

const Button = memo(function Button({
  text,
  variant = "primary",
  onClick,
  disabled = false,
  fullWidth = true,
  type = "button",
}) {
  return (
    <button
      type={type}
      className={`button button--${variant} ${fullWidth ? "button--full" : ""}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
});

Button.displayName = "Button";

export default Button;
