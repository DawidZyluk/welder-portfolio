import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Carousel.scss";
import images from "../../assets/photos";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const thumbnailRefs = useRef([]);
  const isInitialMount = useRef(true);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleImageClick = (index) => {
    setCurrentIndex(index);
  };

  const handleCarouselImageClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    // Skip scrollIntoView on initial mount to prevent page jump
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    if (thumbnailRefs.current[currentIndex]) {
      thumbnailRefs.current[currentIndex].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  }, [currentIndex]);

  return (
    <>
      <div className="carousel-container">
        <button className="carousel-button prev" onClick={prevSlide}>
          ‹
        </button>
        <div className="carousel-wrapper">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              alt={`Rzeźba ${currentIndex + 1}`}
              className="carousel-image"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              loading="lazy"
              onClick={handleCarouselImageClick}
              style={{ cursor: "pointer" }}
            />
          </AnimatePresence>
        </div>
        <button className="carousel-button next" onClick={nextSlide}>
          ›
        </button>
      </div>
      <div className="gallery-section">
        <div className="gallery-grid">
          {images.map((image, index) => {
            return (
              <motion.img
                key={index}
                ref={(el) => (thumbnailRefs.current[index] = el)}
                src={image}
                alt={`Rzeźba ${index + 1}`}
                className={`gallery-thumbnail ${
                  index === currentIndex ? "active" : ""
                }`}
                onClick={() => handleImageClick(index)}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
                loading="lazy"
              />
            );
          })}
        </div>
      </div>
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <button className="modal-close" onClick={closeModal}>
            ×
          </button>
          <button className="modal-button modal-prev" onClick={(e) => { e.stopPropagation(); prevSlide(); }}>
            ‹
          </button>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={images[currentIndex]}
              alt={`Rzeźba ${currentIndex + 1}`}
              className="modal-image"
            />
          </div>
          <button className="modal-button modal-next" onClick={(e) => { e.stopPropagation(); nextSlide(); }}>
            ›
          </button>
        </div>
      )}
    </>
  );
};

export default Carousel;

