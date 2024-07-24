import React from 'react';
 import "./cards.css"
 
function Cards() {
  const eventData = [
    {
      bgImage: 'https://www.green-event.de/wp-content/uploads/2020/07/GET_Portfolio_Public_Events_1024x680.jpg',
      title: 'All Rewards Program',
      day: 'Tuesday / 10.00 am',
      date: 'Sep 10, 2023'
    },
    {
      bgImage: 'https://w0.peakpx.com/wallpaper/147/135/HD-wallpaper-dance-party-disco-share-glow-new-years-music-fun-lights-sparkle-club-clubbing-party-dance-celebrate.jpg',
      title: 'A Lavish Escape',
      day: 'Thursday / 3.00 pm',
      date: 'Sep 12, 2023'
    },
    {
      bgImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwaA8j3JXCUJK6s0E139bWxzBDGcLkBaAaZBUycCpQo-9_9JZf99E2r7QQrTKS7qyNNmk&usqp=CAU',
      title: 'Exquisite Affair',
      day: 'Saturday / 10.00 am',
      date: 'Sep 14, 2023'
    },
    {
      bgImage: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Cute Cat Event',
      day: 'Monday / 2.00 pm',
      date: 'Sep 16, 2023'
    },
    {
      bgImage: 'https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvNDM3LWZlbGl4LTE1OF8xLmpwZw.jpg',
      title: 'Cityscape Celebration',
      day: 'Wednesday / 5.00 pm',
      date: 'Sep 18, 2023'
    },
    {
      bgImage: 'https://images.pexels.com/photos/9665590/pexels-photo-9665590.jpeg?cs=srgb&dl=pexels-cottonbro-studio-9665590.jpg&fm=jpg',
      title: 'Artistic Showcase',
      day: 'Friday / 11.00 am',
      date: 'Sep 20, 2023'
    }
  ];
 
  return (
    <div className="eventContainer">
      <h1>Events</h1>
      <div className='eventRow'>
        {eventData.map((details, index) => (
          <div key={index} className='eventsCard'>
            <img src={details.bgImage} alt={details.title} />
            <div className='eventContent'>
              <h2>{details.title}</h2>
              <p>{details.day}</p>
              <p>{details.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
 
export default Cards;