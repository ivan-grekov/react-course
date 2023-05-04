import React, { ReactNode } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
import CartContext from "../../store/CartContext";

type ModalProps = {
  children: ReactNode;
};

const BackDrop: React.FC<{ onCloseCart: () => void }> = ({ onCloseCart }) => {
  return <div className={styles.backdrop} onClick={onCloseCart}></div>;
};

const ModalOverlay = (props: ModalProps) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays")!;

const Modal = (props: ModalProps) => {
  const ctx = React.useContext(CartContext);
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <BackDrop onCloseCart={ctx.onHideCart} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </React.Fragment>
  );
};

export default Modal;
