// import React from "react";
// import "./cards.css";

// export default function ThingsCard() {
//   const cardsData = [
//     {
//       title: "Activities",
//       bgImage:
//         "https://cdn.prod.website-files.com/5c6d6c45eaa55f57c6367749/65045302e6db68b14ac5639f_x-650452f4dd2fb.webp",
//     },
//     {
//       title: "Around the Hotel",
//       bgImage:
//         "https://hips.hearstapps.com/hmg-prod/images/grand-hotel-tremezzo-6479210d9dae0.jpeg",
//     },
//     {
//       title: "Shopping",
//       bgImage: "https://images.spot.im/v1/production/pgydvsfnvj1wwm6mlq5b",
//     },
//     {
//       title: "Night Life",
//       bgImage:
//         "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/326565307.jpg?k=b74027b65f0bb3688aa9cc384efa2f4321c0d08f233fac22497f9b80779f1ac5&o=?s=375x210&ar=16x9",
//     },
//   ];
//   return (
//     <div className="thingsToDo">
//       <h1>Things to do</h1>
//       <div className="thingsSquare">
//         {cardsData.map((details, index) => (
//           <div key={index} className="thingsCard">
//             <img src={details.bgImage} alt={details.title} />
//             <div className="thingsContent">
//               <h2>{details.title}</h2>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import "./cards.css";

export default function ThingsCard() {
  const [popupOpen, setPopupOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const cardsData = [
    {
      title: "Activities",
      bgImage:
        "https://cdn.prod.website-files.com/5c6d6c45eaa55f57c6367749/65045302e6db68b14ac5639f_x-650452f4dd2fb.webp",
      relatedImages: [
        "https://hips.hearstapps.com/hmg-prod/images/grand-hotel-tremezzo-6479210d9dae0.jpeg",
        "https://cdn.pixabay.com/photo/2018/04/05/13/08/water-3292794_1280.jpg",
        "https://cdn.pixabay.com/photo/2017/06/15/08/08/ha-long-bay-2404431_1280.jpg",
      ],
    },
    {
      title: "Around the Hotel",
      bgImage:
        "https://hips.hearstapps.com/hmg-prod/images/grand-hotel-tremezzo-6479210d9dae0.jpeg",
      relatedImages: [
        "https://hips.hearstapps.com/hmg-prod/images/grand-hotel-tremezzo-6479210d9dae0.jpeg",
        "https://cdn.pixabay.com/photo/2018/04/05/13/08/water-3292794_1280.jpg",
        "https://cdn.pixabay.com/photo/2017/06/15/08/08/ha-long-bay-2404431_1280.jpg",
      ],
    },
    {
      title: "Shopping",
      bgImage: "https://images.spot.im/v1/production/pgydvsfnvj1wwm6mlq5b",
      relatedImages: [
        "https://hips.hearstapps.com/hmg-prod/images/grand-hotel-tremezzo-6479210d9dae0.jpeg",
        "https://cdn.pixabay.com/photo/2018/04/05/13/08/water-3292794_1280.jpg",
        "https://cdn.pixabay.com/photo/2017/06/15/08/08/ha-long-bay-2404431_1280.jpg",
      ],
    },
    {
      title: "Night Life",
      bgImage:
        "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/326565307.jpg?k=b74027b65f0bb3688aa9cc384efa2f4321c0d08f233fac22497f9b80779f1ac5&o=?s=375x210&ar=16x9",
      relatedImages: [
        "https://hips.hearstapps.com/hmg-prod/images/grand-hotel-tremezzo-6479210d9dae0.jpeg",
        "https://cdn.pixabay.com/photo/2018/04/05/13/08/water-3292794_1280.jpg",
        "https://cdn.pixabay.com/photo/2017/06/15/08/08/ha-long-bay-2404431_1280.jpg",
      ],
    },
  ];

  const [selectedRelatedImages, setSelectedRelatedImages] = useState([]);

  const openPopup = (index) => {
    setSelectedRelatedImages(cardsData[index].relatedImages);
    setCurrentIndex(0);
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? selectedRelatedImages.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === selectedRelatedImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="thingsToDo">
      <h1>Things to do</h1>
      <div className="thingsSquare">
        {cardsData.map((details, index) => (
          <div
            key={index}
            className="thingsCard"
            onClick={() => openPopup(index)}
          >
            <img src={details.bgImage} alt={details.title} />
            <div className="thingsContent">
              <h2>{details.title}</h2>
            </div>
          </div>
        ))}
      </div>
      {popupOpen && (
        <div className="popupOverlay">
          <div className="popupContent">
            <button className="closeBtn" onClick={closePopup}>
              <i class="fa-solid fa-x"></i>
            </button>
            <button className="prevBtn" onClick={prevImage}>
              ❮
            </button>
            <img className="popupContent-Hover"src={selectedRelatedImages[currentIndex]} alt="Carousel" />
            <button className="nextBtn" onClick={nextImage}>
              ❯
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
