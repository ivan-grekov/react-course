import React, { useRef, useState } from "react";
import styles from "./Checkout.module.css";

const isEmpty = (value: string) => value.trim().length === 0;
const isFiveChars = (value: string) => value.trim().length === 5;

export interface IUserData {
  name: string;
  street: string;
  city: string;
  postalCode: string;
}

const Checkout: React.FC<{
  onCancel: () => void;
  onConfirm: (userData: IUserData) => void;
}> = ({ onCancel, onConfirm }) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
  });
  const nameInputRef = useRef<HTMLInputElement>(null);
  const postalInputRef = useRef<HTMLInputElement>(null);
  const streetInputRef = useRef<HTMLInputElement>(null);
  const cityInputRef = useRef<HTMLInputElement>(null);

  const confirmHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredName = nameInputRef.current?.value;
    const enteredPostal = postalInputRef.current?.value;
    const enteredStreet = streetInputRef.current?.value;
    const enteredCity = cityInputRef.current?.value;

    const enteredNameIsValid = !isEmpty(enteredName!);
    const enteredPostalIsValid = isFiveChars(enteredPostal!);
    const enteredStreetIsValid = !isEmpty(enteredStreet!);
    const enteredCityIsValid = !isEmpty(enteredCity!);

    setFormInputsValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
      postalCode: enteredPostalIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredPostalIsValid &&
      enteredCityIsValid &&
      enteredStreetIsValid;

    if (!formIsValid) {
      return;
    }

    onConfirm({
      name: enteredName!,
      street: enteredStreet!,
      city: enteredCity!,
      postalCode: enteredPostal!,
    });
  };

  return (
    <form className={styles.form} onSubmit={confirmHandler}>
      <div
        className={`${styles.control} ${
          !formInputsValidity.name ? styles.invalid : ""
        }`}
      >
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputsValidity.name && <p>Please enter a valid name</p>}
      </div>
      <div
        className={`${styles.control} ${
          !formInputsValidity.street ? styles.invalid : ""
        }`}
      >
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formInputsValidity.street && <p>Please enter a valid street</p>}
      </div>
      <div
        className={`${styles.control} ${
          !formInputsValidity.postalCode ? styles.invalid : ""
        }`}
      >
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalInputRef} />
        {!formInputsValidity.postalCode && (
          <p>Please enter a valid postal code</p>
        )}
      </div>
      <div
        className={`${styles.control} ${
          !formInputsValidity.city ? styles.invalid : ""
        }`}
      >
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formInputsValidity.city && <p>Please enter a valid city</p>}
      </div>
      <div className={styles.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button className={styles.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
