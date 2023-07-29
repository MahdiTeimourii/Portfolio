import React from 'react';
import Modal from 'react-modal';

const detailsModal = ({ index, isOpen, closeModal, content }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      ariaHideApp={false}
      className="modal"
      overlayClassName="modal-overlay"
    >
      <h2>Modal Box {index + 1}</h2>
      <p>{content}</p>
      <button onClick={closeModal}>Close</button>
    </Modal>
  );
};

export default detailsModal;
