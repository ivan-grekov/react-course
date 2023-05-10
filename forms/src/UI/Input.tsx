import React from "react";
interface IInput {
  type: string;
  id: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placehold: string;
}

const Input: React.FC<IInput> = ({
  type,
  id,
  value,
  onChange,
  onBlur,
  placehold,
}) => {
  return (
    <input
      type={type}
      id={id}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      placeholder={placehold}
    />
  );
};

export default Input;
