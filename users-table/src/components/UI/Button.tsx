import React from "react";
import styles from "./Button.module.css";

const Button: React.FC<{
  children: React.ReactNode;
  type: "button" | "submit" | "reset" | undefined;
  onClick: () => void;
}> = ({ children, type, onClick }) => {
  return (
    <button className={styles.button} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
