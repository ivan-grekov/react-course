import React from "react";
import "./Card.scss";

const Card: React.FC<{ children: React.ReactNode; className: string }> = ({
  children,
  className,
}) => {
  const classes = "card " + className;
  return <div className={classes}>{children}</div>;
};

export default Card;
