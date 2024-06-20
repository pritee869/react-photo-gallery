import React from 'react';
import Modal from 'react-modal';
import { motion } from 'framer-motion';
import './PhotoModal.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '20px',
    borderRadius: '10px',
  },
};

const PhotoModal = ({ photo, onClose }) => {
  return (
    <Modal
      isOpen={!!photo}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="View Photo"
      ariaHideApp={false}
    >
      <motion.div
        className="modal-photo"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img src={photo?.url} alt="Modal View" className="modal-image" />
        <button onClick={onClose} className="close-button">Close</button>
      </motion.div>
    </Modal>
  );
};

export default PhotoModal;
