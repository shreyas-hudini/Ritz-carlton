import React from 'react';
import "./cards.css"
 
export default function ThingsCard() {
  const cardsData = [
    {
      title: 'Activities',
      bgImage:
        'https://cdn.prod.website-files.com/5c6d6c45eaa55f57c6367749/65045302e6db68b14ac5639f_x-650452f4dd2fb.webp',
    },
    {
      title: 'Around the Hotel',
      bgImage:
        'https://hips.hearstapps.com/hmg-prod/images/grand-hotel-tremezzo-6479210d9dae0.jpeg',
    },
    {
      title: 'Shopping',
      bgImage: 'https://images.spot.im/v1/production/pgydvsfnvj1wwm6mlq5b',
    },
    {
      title: 'Night Life',
      bgImage:
        'https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/326565307.jpg?k=b74027b65f0bb3688aa9cc384efa2f4321c0d08f233fac22497f9b80779f1ac5&o=?s=375x210&ar=16x9',
    },
  ];
  return (
    <>
    <h1>Things to do</h1>
    <div className="eventContainer thingsGrid">
     
      {cardsData.map((details, index) => (
          <div key={index} className='eventsCard'>
            <img src={details.bgImage} alt={details.title} />
            <div className='eventContent'>
              <h2>{details.title}</h2>
              <p>{details.day}</p>
              <p>{details.date}</p>
            </div>
          </div>
        ))}
      </div></>
  );
}