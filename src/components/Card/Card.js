import React from 'react';
import './Card.scss';

const Card = () => {
  return(
    <div className="Card">
      <svg viewBox="0 0 390 220">
          <g fill="#eee">
              <rect width="390" height="220"></rect>
          </g>
      </svg>
      <div className="Title">
        <div className="Name"></div>
        <div className="Price"></div>
      </div>
      <div className="Description"></div>
      <div className="Tags">
        <div className="Tag"></div>
        <div className="Tag"></div>
        <div className="Tag"></div>
      </div>
    </div>
  );
}

export default Card;