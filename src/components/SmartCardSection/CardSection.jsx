/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { SmartDarkButton } from "dark_power25";

const CardImage = ({ src, alt, id }) => {
  const navigate = useNavigate();

  const handleImageClick = () => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="card-image">
      <figure className="image is-128x128 card-Image-hover">
        <img src={src} alt={alt} onClick={handleImageClick} />
      </figure>
    </div>
  );
};

const CardSection = ({ title, images, link, width, button }) => {
  const navigate = useNavigate();

  const handleExplore = (path) => {
    navigate(path);
  };
  return (
    <>
      <div className={`column is-${width} card mx-2 my-2`}>
        <p className="card-header-title">{title}</p>
        {images.map((row, rowIndex) => (
          <div className="columns" key={rowIndex}>
            {row.map((image, colIndex) => (
              <div className="column" key={colIndex}>
                <CardImage src={image.src} alt={image.alt} id={image.id} />
              </div>
            ))}
          </div>
        ))}
        {button && (
          <SmartDarkButton
            rightIcon="fa fa-hand-o-right"
            classList={["has-text-info is-rounded is-small"]}
            label="Explore"
            onClick={() => {
              handleExplore(link);
            }}
          />
        )}
      </div>
    </>
  );
};

export default CardSection;
