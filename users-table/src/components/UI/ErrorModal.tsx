import React from "react";
import Card from "./Card";
import styles from "./ErrorModal.module.css";
import Button from "./Button";

const ErrorModal: React.FC<{
  title: string;
  message: string;
  onConfirm: () => void;
}> = ({ title, message, onConfirm }) => {
  return (
    <>
      <div className={styles.backdrop} onClick={onConfirm}></div>
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{title}</h2>
        </header>
        <div className={styles.content}>
          <p>{message}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={onConfirm}>Okay</Button>
        </footer>
      </Card>
    </>
  );
};

export default ErrorModal;
