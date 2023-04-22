import React from "react";
import styles from "./Card.module.css";

const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  const classes = `${styles.card} ${className}`;
  return <div className={classes}>{children}</div>;
};

export default Card;
