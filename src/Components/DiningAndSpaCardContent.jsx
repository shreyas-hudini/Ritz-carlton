import React from 'react';

const CardContent = ({ title, category, details }) => {
  return (
    <div className="contentCard">
      <h3>{title}</h3>
      <p>{category}</p>
      <p>{details}</p>
    </div>
  );
};

export default CardContent;
