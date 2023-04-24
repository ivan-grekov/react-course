import React from "react";

import classes from "./Button.module.css";

const Button: React.FC<{
  type: "submit" | "button" | "reset" | undefined;
  onClick?: () => void;
  disabled: boolean;
  className: string;
  children: React.ReactNode;
}> = ({ type, onClick, disabled, className, children }) => {
  return (
    <button
      type={type || "button"}
      className={`${classes.button} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
