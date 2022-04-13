import React from "react";
import PropTypes from "prop-types";

const Card = ({ img }) => {
  return (
    <div>
      <div
        className="card m-2"
        style={{
          width: "18rem",
          height: "14rem",
        }}
      >
        <a href={img} target="_blank" rel="noopener noreferrer">
          <img
            src={img}
            className="card-img-top"
            alt="imagen.jpg"
            style={{
              width: "18rem",
              height: "14rem",
            }}
          />
        </a>
      </div>
    </div>
  );
};

Card.propTypes = {
  img: PropTypes.string,
};

export default Card;
