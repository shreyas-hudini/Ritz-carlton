import React from 'react';

// CardImage Component
const CardImage = ({ bgImage }) => {
  return (
    <div
      className="imageCard"
      style={{ backgroundImage: `url(${bgImage})` }}
    ></div>
  );
};

// CardContent Component
const CardContent = ({ title, category, details }) => {
  return (
    <div className="contentCard">
      <h3>{title}</h3>
      <p>{category}</p>
      <p>{details}</p>
    </div>
  );
};

// Main Card Component
const Card = ({ data }) => {
  return (
    <div className="card">
      <CardImage bgImage={data.bgImage} />
      <CardContent
        title={data.title}
        category={data.category}
        details={data.details}
      />
    </div>
  );
};

export default Card;
