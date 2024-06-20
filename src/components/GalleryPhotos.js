import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Photo from './Photo';
import PhotoInput from './PhotoInput';
import PhotoModal from './PhotoModal';
import { motion, AnimatePresence } from 'framer-motion';
import './PhotoGallery.css';

const GalleryPhotos = () => {
  const [photos, setPhotos] = useState([]);
  const [modalPhoto, setModalPhoto] = useState(null);

  const handleAddPhoto = (url) => {
    setPhotos([...photos, { id: Date.now().toString(), url }]);
  };

  const handleRemovePhoto = (id) => {
    setPhotos(photos.filter(photo => photo.id !== id));
  };

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const reorderedPhotos = Array.from(photos);
    const [movedPhoto] = reorderedPhotos.splice(result.source.index, 1);
    reorderedPhotos.splice(result.destination.index, 0, movedPhoto);

    setPhotos(reorderedPhotos);
  };

  return (
    <div className="photo-gallery">
      <PhotoInput onAddPhoto={handleAddPhoto} />
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="droppable-photos" direction="horizontal">
          {(provided) => (
            <div
              className="photos"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              <AnimatePresence>
                {photos.map((photo, index) => (
                  <Draggable key={photo.id} draggableId={photo.id} index={index}>
                    {(provided) => (
                      <motion.div
                        className="photo-wrapper"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        layout
                      >
                        <Photo
                          photo={photo}
                          onRemovePhoto={handleRemovePhoto}
                          onViewPhoto={() => setModalPhoto(photo)}
                        />
                      </motion.div>
                    )}
                  </Draggable>
                ))}
              </AnimatePresence>
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      {modalPhoto && (
        <PhotoModal
          photo={modalPhoto}
          onClose={() => setModalPhoto(null)}
        />
      )}
    </div>
  );
};

export default GalleryPhotos;
