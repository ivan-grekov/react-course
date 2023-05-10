import React from "react";
import useInput from "../hooks/use-input";
import Input from "../UI/Input";

const SimpleInput: React.FC = (props) => {
  const {
    value: enteredName,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    hasError: nameInputHasError,
    isValid: enteredNameIsValid,
    reset: resetNameInput,
  } = useInput((value) => value!.trim() !== "");

  const {
    value: enteredEmail,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    hasError: emailInputHasError,
    isValid: enteredEmailIsValid,
    reset: resetEmailInput,
  } = useInput((value) => value!.includes("@"));

  let formIsValid = false;
  if (enteredNameIsValid && enteredEmailIsValid) formIsValid = true;

  const formSubmissionHandler = (e: React.FormEvent) => {
    e.preventDefault();

    if (!enteredNameIsValid && !enteredEmailIsValid) {
      return;
    }

    resetNameInput();
    resetEmailInput();
  };

  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  const nameInputProps = {
    type: "text",
    id: "name",
    value: enteredName,
    onChange: nameChangedHandler,
    onBlur: nameBlurHandler,
    placehold: "Ivan",
  };

  const emailInputProps = {
    type: "email",
    id: "email",
    value: enteredEmail,
    onChange: emailChangedHandler,
    onBlur: emailBlurHandler,
    placehold: "ivan_grekov@yahoo.com",
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor={nameInputProps.id}>Your Name</label>
        <Input {...nameInputProps} />
        {nameInputHasError ? (
          <p className="error-text">Name must not be empty.</p>
        ) : (
          ""
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor={emailInputProps.id}>Your Email</label>
        <Input {...emailInputProps} />
        {emailInputHasError ? (
          <p className="error-text">Email should contain '@'.</p>
        ) : (
          ""
        )}
      </div>
      <div className="form-actions">
        <button type="submit" disabled={!formIsValid}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default SimpleInput;
