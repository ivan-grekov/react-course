import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import styles from "./ErrorModal.module.css";
import Button from "./Button";

const BackDrop: React.FC<{ onConfirm: () => void }> = ({ onConfirm }) => {
  return <div className={styles.backdrop} onClick={onConfirm}></div>;
};

const ModalOverlay: React.FC<{
  title: string;
  message: string;
  onConfirm: () => void;
}> = ({ title, message, onConfirm }) => {
  return (
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
  );
};

const ErrorModal: React.FC<{
  title: string;
  message: string;
  onConfirm: () => void;
}> = ({ title, message, onConfirm }) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <BackDrop onConfirm={onConfirm} />,
        document.getElementById("backdrop")!
      )}
      {ReactDOM.createPortal(
        <ModalOverlay title={title} message={message} onConfirm={onConfirm} />,
        document.getElementById("modal-overlay")!
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
