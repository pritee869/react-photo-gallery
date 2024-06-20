import React from 'react';
import { motion } from 'framer-motion';
import './Photo.css';

const Photo = ({ photo, onRemovePhoto, onViewPhoto }) => {
  return (
    <motion.div
      className="photo"
      initial={{ scale: 0.9 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.05 }}
      onClick={onViewPhoto}
    >
      <img src={photo.url} alt="Gallery" />
      <button
        onClick={(e) => {
          e.stopPropagation();
          onRemovePhoto(photo.id);
        }}
      >
        Remove
      </button>
    </motion.div>
  );
};

export default Photo;
