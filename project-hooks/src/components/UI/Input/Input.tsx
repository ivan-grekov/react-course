import React, { useRef, useImperativeHandle } from "react";
import classes from "./Input.module.css";

interface Input {
  isValid: boolean;
  value: string;
  label: string;
  id: string;
  type: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
}

const Input = React.forwardRef(
  ({ isValid, value, label, id, type, onChange, onBlur }: Input, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const activate = () => {
      inputRef.current?.focus();
    };

    useImperativeHandle(ref, () => {
      return {
        focus: activate,
      };
    });

    return (
      <div
        className={`${classes.control} ${
          isValid === false ? classes.invalid : ""
        }`}
      >
        <label htmlFor={id}>{label}</label>
        <input
          ref={inputRef}
          type={type}
          id={id}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
      </div>
    );
  }
);

export default Input;
