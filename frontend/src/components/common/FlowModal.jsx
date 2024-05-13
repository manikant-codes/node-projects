import { Modal } from "flowbite-react";
import React from "react";

function FlowModal({ isOpen, toggleModal, title, body, footer }) {
  return (
    <>
      <Modal dismissible show={isOpen} onClose={toggleModal}>
        <Modal.Header>{title}</Modal.Header>
        <Modal.Body>{body}</Modal.Body>
        {footer && <Modal.Footer>{footer}</Modal.Footer>}
      </Modal>
    </>
  );
}

export default FlowModal;
