import React from "react";
import styles from "./Input.module.css";

interface InputProps {
  idx: string;
  type: string;
  min: string;
  max: string;
  step: string;
  defaultValue: string;
}

interface Props {
  label: string;
  input: Partial<InputProps>;
}

export type Ref = HTMLInputElement;

const Input = React.forwardRef<Ref, Props>((props, ref) => {
  return (
    <div className={styles.input}>
      <label htmlFor={props.input.idx}>{props.label}</label>
      <input ref={ref} id={props.input.idx} {...props.input} />
    </div>
  );
});

export default Input;
