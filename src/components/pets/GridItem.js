import React from "react";
import PropTypes from "prop-types";
import Image from '../../assets/images/paw.jpg';

const GridItem = ({ animal, index }) => {
  let backgroundImage = animal.photos.length > 0 ? animal.photos[0].medium : Image;
  const avatarStyle = {
    backgroundColor: `rgb(101, 115, 195)`
  };
  const imageStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "300px",
    height: "300px",
  };

  const getfirstLetter = () => {
    return animal.name.split("")[0];
  };
  const nameFormat = () => {
    // eslint-disable-next-line react/prop-types
    return animal.name.substring(0, 5);
  };
  return (
    <div className={`pet-box grid-container animated fadeInUp delay-${index}s`}>
      <div className="box-header">
        <div className="avatar" style={avatarStyle}>
          <span className="initial">{getfirstLetter()}</span>
        </div>
        <div>
          <span>{nameFormat()}</span>
          <br />
          <span>
            {animal.size},{animal.status}
          </span>
        </div>
      </div>
      <div style={imageStyle}></div>
      <div>
        <div className="content">
          <div className="description">{animal.description}</div>
          <button className="btn btn-dark">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default GridItem;

GridItem.types = {
  index: PropTypes.number,
  animal: PropTypes.shape({
    photos: PropTypes.array
  })
};