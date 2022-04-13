import React from "react";
import PropTypes from "prop-types";

const Card = ({ img }) => {
  return (
    <div>
      <div
        className="card m-2"
        style={{
          width: "18rem",
          height: "8rem"
        }}
      >
        <img src={img} className="card-img-top" alt="imagen.jpg" />
      </div>
    </div>
  );
};

Card.propTypes = {
  img: PropTypes.string,
};

export default Card;
