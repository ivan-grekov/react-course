import React from "react";

import classes from "./Button.module.css";
interface IButton {
  type: "submit" | "button" | "reset" | undefined;
  onClick: () => void;
  disabled: boolean;
  className: string;
  children: React.ReactNode;
}

const Button: React.FC<Partial<IButton>> = ({
  type,
  onClick,
  disabled,
  className,
  children,
}) => {
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
