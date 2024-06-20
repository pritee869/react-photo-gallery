import React, { useState } from 'react';
import './PhotoInput.css';

const PhotoInput = ({ onAddPhoto }) => {
  const [url, setUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddPhoto(url);
    setUrl('');
  };

  return (
    <form className="photo-input" onSubmit={handleSubmit}>
      <input
        type="url"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter photo URL"
        required
      />
      <button type="submit">Add Photo</button>
    </form>
  );
};

export default PhotoInput;
