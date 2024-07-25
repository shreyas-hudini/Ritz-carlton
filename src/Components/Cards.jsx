import React from "react";
import "./cards.css";

function Cards() {
  const eventData = [
    {
      bgImage:
        "https://www.shutterstock.com/image-photo/event-decor-chic-table-setting-600nw-2327936187.jpg",
      title: "All Rewards Program",
      day: "Tuesday / 10.00 am",
      date: "Sep 10, 2023",
    },
    {
      bgImage:
        "https://lh6.googleusercontent.com/proxy/O2TZqRfnQ3RqGJqh_0xRyBXHotnjdjm7ID04lnnhPi0pkkuPowA5Pau1vdKJywHo85GX8F6i5m9TP4eOM1n39hMRJfq9eBRbPVLOOSM5ZAiGwrQjeCWHXc1KmCo-htOBxdlqgykqjMQHSQUhazrjEMQyc1m1QAGWL4NYhZWI",
      title: "A Lavish Escape",
      day: "Thursday / 3.00 pm",
      date: "Sep 12, 2023",
    },
    {
      bgImage:
        "https://c4.wallpaperflare.com/wallpaper/926/812/34/people-event-india-wallpaper-preview.jpg",
      title: "Holi Carnival",
      day: "Saturday / 10.00 am",
      date: "Sep 14, 2023",
    },
    {
      bgImage:
        "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2024/02/02/0853/IAHTH-P0038-Vesper-Ballroom.jpg/IAHTH-P0038-Vesper-Ballroom.16x9.jpg",
      title: "Exquisite Affair",
      day: "Monday / 2.00 pm",
      date: "Sep 16, 2023",
    },
    {
      bgImage: "https://4.imimg.com/data4/FA/NN/MY-12958090/dj-service.jpeg",
      title: "DJ Party",
      day: "Wednesday / 5.00 pm",
      date: "Sep 18, 2023",
    },
    {
      bgImage:
        "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2020/01/07/1637/Hyatt-Centric-The-Liberties-Dublin-P069-Meeting-Room-Classroom-Setup.jpg/Hyatt-Centric-The-Liberties-Dublin-P069-Meeting-Room-Classroom-Setup.16x9.jpg",
      title: "Birthday Celebration",
      day: "Friday / 11.00 am",
      date: "Sep 20, 2023",
    },
  ];
  return (
    <div className="eventContainer">
      <h1>Events</h1>
      <div className="eventRow">
        {eventData.map((details, index) => (
          <div key={index} className="eventsCard">
            <img src={details.bgImage} alt={details.title} />
            <div className="eventCardInfo">
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
