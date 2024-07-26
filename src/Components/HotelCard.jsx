import React, { useState } from "react";
import "./hotelCard.css";

function HotelCard() {
  const [activeIndex, setActiveIndex] = useState(null);

  const eventData = [
    {
      bgImage:
        "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?cs=srgb&dl=pexels-thorsten-technoman-109353-338504.jpg&fm=jpg",
      title:
        "Discover a home away from home where every detail is designed to indulge and delight. Your perfect getaway starts here.",
    },
    {
      bgImage:
        "https://c4.wallpaperflare.com/wallpaper/814/350/568/spa-beach-hotel-infinity-pool-wallpaper-preview.jpg",
      title:
        "Escape to a sanctuary of comfort and luxury. Experience hospitality redefined, where every stay is an unforgettable journey.",
    },
    {
      bgImage:
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWx8ZW58MHx8MHx8fDA%3D",
      title:
        "Welcome to your gateway to extraordinary experiences. Immerse yourself in elegance, relaxation, and impeccable service – your dream stay awaits.",
    },
    {
      bgImage:
        "https://img.freepik.com/free-photo/room-with-massage-tables-wall-with-lights-it_188544-36461.jpg",
      title:
        "Discover a home away from home where every detail is designed to indulge and delight. Your perfect getaway starts here.",
    },
    {
      bgImage:
        "https://c4.wallpaperflare.com/wallpaper/135/634/353/life-hotel-building-resort-hotel-wallpaper-preview.jpg",
      title:
        "Escape to a sanctuary of comfort and luxury. Experience hospitality redefined, where every stay is an unforgettable journey.",
    },
    {
      bgImage:
        "https://t3.ftcdn.net/jpg/06/37/16/64/360_F_637166455_RZOHg6K3M6noLPKQmOHH5ZI70zXEyDaq.jpg",
      title:
        "Welcome to your gateway to extraordinary experiences. Immerse yourself in elegance, relaxation, and impeccable service – your dream stay awaits.",
    },
  ];

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="eventContainer">
      <h2>Welcome to</h2>
      <h1>Raffles Hotels & Resorts</h1>
      <div className="eventRow">
        {eventData.map((details, index) => (
          <div
            key={index}
            className={`eventsCard hotelCard ${activeIndex === index ? "active" : ""}`}
            onClick={() => handleClick(index)}
          >
            <img src={details.bgImage} alt={details.title} />
            {activeIndex === index && (
              <div className="eventContent">
                <p>{details.title}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default HotelCard;
