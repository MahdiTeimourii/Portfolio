import React, { useState } from 'react';
import Modal from 'react-modal';
import './App.css'; // Import the CSS file
import Sidebar from './components/Sidebar'; // Update the import statement for Sidebar component

const modalContents = [
  'Modal Box 1 Content',
  'Modal Box 2 Content',
  'Modal Box 3 Content',
  'Modal Box 4 Content',
  'Modal Box 5 Content',
];

const App = () => {
  const [modalIndex, setModalIndex] = useState(null);

  const openModal = (index) => {
    setModalIndex(index);
  };

  const closeModal = () => {
    setModalIndex(null);
  };

  return (
    <div className="app">
      <Sidebar /> {/* Include the Sidebar component */}
      <main>
        <h1>Welcome to our App!</h1>

        {modalContents.map((content, index) => (
          <button key={index} onClick={() => openModal(index)} className="modal-button">
            Open Modal Box {index + 1}
          </button>
        ))}

        {modalContents.map((content, index) => (
          <Modal
            key={index}
            isOpen={modalIndex === index}
            onRequestClose={closeModal}
            ariaHideApp={false}
            className="modal"
            overlayClassName="modal-overlay"
          >
            <h2>Modal Box {index + 1}</h2>
            <p>{content}</p>
            <button onClick={closeModal}>Close</button>
          </Modal>
        ))}
      </main>
    </div>
  );
};

export default App;
