import React from 'react';
import CardImage from './DiningAndSpaCardImage';
import CardContent from './DiningAndSpaCardContent';

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
