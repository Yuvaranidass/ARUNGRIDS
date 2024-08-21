/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./SmartSlider.css";

const SmartSlider = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const nextSlide = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
      setFade(false);
    }, 500);
  };

  const prevSlide = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === 0 ? slides.length - 1 : prevSlide - 1
      );
      setFade(false);
    }, 500);
  };

  return (
    <div className="image-slider">
      <div className="slider-container">
        <figure className={`image ${fade ? "fade" : "fade-out"}`}>
          <img
            className="is-fullwidth"
            src={slides[currentSlide].image}
            alt={`Slide ${currentSlide + 1}`}
          />
        </figure>
        <button className="button is-info prev-button has-text-white" onClick={prevSlide}>
          <i className="fa fa-arrow-left" aria-hidden="true"></i>
        </button>
        <button
          className="button is-info next-button has-text-white"
          onClick={nextSlide}
        >
          <i className="fa fa-arrow-right" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
};

SmartSlider.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SmartSlider;
