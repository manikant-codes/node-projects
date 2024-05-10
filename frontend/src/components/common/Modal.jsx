import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "../../styles/common/modal.module.css";

function Modal({ title, content, footer, toggleModal }) {
  return (
    <div className={styles.modalContainerOuter}>
      <div className={styles.modalContainerInner}>
        <div className={styles.titleContainer}>
          <h3>{title}</h3>
          <button onClick={toggleModal}>
            <FontAwesomeIcon icon={faClose} />
          </button>
        </div>
        {content && <div>{content}</div>}
        {footer && <div>{footer}</div>}
      </div>
    </div>
  );
}

export default Modal;
