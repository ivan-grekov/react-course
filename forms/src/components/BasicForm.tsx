import React from "react";
import useInput from "../hooks/use-input";
import Input from "../UI/Input";

const BasicForm: React.FC = (props) => {
  const {
    value: enteredFirstName,
    valueChangeHandler: firstNameChangedHandler,
    inputBlurHandler: firstNameBlurHandler,
    hasError: firstNameInputHasError,
    isValid: enteredFirstNameIsValid,
    reset: resetFirstNameInput,
  } = useInput((value) => value!.trim() !== "");

  const {
    value: enteredLastName,
    valueChangeHandler: lastNameChangedHandler,
    inputBlurHandler: lastNameBlurHandler,
    hasError: lastNameInputHasError,
    isValid: enteredLastNameIsValid,
    reset: resetLastNameInput,
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
  if (enteredFirstNameIsValid && enteredLastNameIsValid && enteredEmailIsValid)
    formIsValid = true;

  const formSubmissionHandler = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !enteredFirstNameIsValid &&
      !enteredLastNameIsValid &&
      !enteredEmailIsValid
    ) {
      return;
    }

    resetFirstNameInput();
    resetLastNameInput();
    resetEmailInput();
  };

  const firstNameInputClasses = firstNameInputHasError
    ? "form-control invalid"
    : "form-control";

  const lastNameInputClasses = lastNameInputHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  const firstNameInputProps = {
    type: "text",
    value: enteredFirstName,
    onChange: firstNameChangedHandler,
    onBlur: firstNameBlurHandler,
  };

  const lastNameInputProps = {
    type: "text",
    value: enteredLastName,
    onChange: lastNameChangedHandler,
    onBlur: lastNameBlurHandler,
  };

  const emailInputProps = {
    type: "email",
    id: "email",
    value: enteredEmail,
    onChange: emailChangedHandler,
    onBlur: emailBlurHandler,
    placehold: "ivan_grekov@yahoo.com",
  };

  const firstNameInputErrorString = firstNameInputHasError ? (
    <p className="error-text">First name must not be empty.</p>
  ) : (
    ""
  );
  const lastNameInputErrorString = lastNameInputHasError ? (
    <p className="error-text">Last name must not be empty.</p>
  ) : (
    ""
  );

  const emailInputErrorString = emailInputHasError ? (
    <p className="error-text">Email should contains '@'</p>
  ) : (
    ""
  );

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="control-group">
        <div className={firstNameInputClasses}>
          <label htmlFor="firstName">First Name</label>
          <Input {...firstNameInputProps} id="firstName" placehold="Ivan" />
          {firstNameInputErrorString}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor="lastName">Last Name</label>
          <Input {...lastNameInputProps} id="lastName" placehold="Grekov" />
          {lastNameInputErrorString}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email-address">E-Mail Address</label>
        <Input {...emailInputProps} id="email-address" />
        {emailInputErrorString}
      </div>
      <div className="form-actions">
        <button type="submit" disabled={!formIsValid}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default BasicForm;
