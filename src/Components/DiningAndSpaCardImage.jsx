import React from 'react';

const CardImage = ({ bgImage }) => {
  return (
    <div className="imageCard" style={{ backgroundImage: `url(${bgImage})` }}>
    </div>
  );
};

export default CardImage;
