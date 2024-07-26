import React from 'react';
import Card from './DiningAndSpaCard';

const CategoryCards = ({ title, data }) => {
  return (
    <div className="categoryCardsContainer">
      <h2>{title}</h2>
      <div className="diningAndSpaCards">
        {data.map((item) => (
          <Card key={item.title} data={item} />
        ))}
      </div>
    </div>
  );
};

const DiningAndSpa = () => {
  const diningData = [
    {
      title: 'Laguna Beach Lounge',
      category: 'Global Cuisine',
      details: 'Mon - Fri 10.00 am - 9.00 pm | Sat - Sun 4.00 pm - 12.00 am',
      bgImage:
        'https://dq5r178u4t83b.cloudfront.net/wp-content/uploads/sites/15/2022/11/03110011/Laguna-Beach-Lounge-Bar.jpg',
    },
    {
      title: 'Porterhouse Steak & Grills',
      category: 'Local Cuisine',
      details: 'Mon - Fri 10.00 am - 9.00 pm | Sat - Sun 4.00 pm - 12.00 am',
      bgImage:
        'https://cache.marriott.com/content/dam/marriott-renditions/LONCW/loncw-manhattangrill-1704-hor-wide.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1336px:*',
    },
    {
      title: 'Bluthner Hall',
      category: 'Local Cuisine',
      details: 'Mon - Fri 10.00 am - 9.00 pm | Sat - Sun 4.00 pm - 12.00 am',
      bgImage:
        'https://m.ahstatic.com/is/image/accorhotels/aja_p_5938-53?wid=1920',
    },
    {
      title: 'Raffles Patisserie',
      category: 'Global Cuisine',
      details: 'Mon - Fri 10.00 am - 9.00 pm | Sat - Sun 4.00 pm - 12.00 am',
      bgImage:
        'https://www.britishairways.com/badp/static/external/AE-B34-2488888/418_AE-B34-2488888-R2219.jpeg',
    },
    {
      title: 'Piatti by the Beach',
      category: 'Local Cuisine',
      details: 'Mon - Fri 10.00 am - 9.00 pm | Sat - Sun 4.00 pm - 12.00 am',
      bgImage:
        'https://www.timeoutdubai.com/cloud/timeoutdubai/2021/11/18/Piatti_LEAD.jpg',
    },
  ];

  const spaData = [
    {
      title: 'Fitness Center',
      category: 'Body-fitness',
      details: 'Available daily, by appointment',
      bgImage:
        'https://miro.medium.com/v2/resize:fit:1027/1*7BhETl0R80lWMVTT-4wh_g.jpeg',
    },
    {
      title: 'Cinq Mondes Spa',
      category: 'Facials and Body Treatments',
      details: 'Open daily from 9 AM to 8 PM',
      bgImage:
        'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/67/6b/6c/spa-cinq-mondes-grand.jpg?w=1200&h=-1&s=1',
    },
    {
      title: 'Spa',
      category: 'Massage Therapy',
      details: 'Open daily from 9 AM to 8 PM',
      bgImage:
        'https://www.hilton.com/im/en/PPTHIHH/19343689/double-treatment-cabin-hilton-hotel-tahiti.jpg?impolicy=crop&cw=5000&ch=3333&gravity=NorthWest&xposition=0&yposition=208&rw=1280&rh=854',
    },
    {
      title: 'Sofitel Spa',
      category: 'Massage Therapy',
      details: 'Open daily from 10 AM to 9 PM',
      bgImage:
        'https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/105/2022/09/26215000/SFJ-4278-copy-e1664233146818-1170x731.jpg',
    },
    {
      title: 'Yoga',
      category: 'Mind-body Fitness',
      details: 'Available daily, by appointment',
      bgImage:
        'https://www.felixhotels.it/wp-content/uploads/Galanias_Hotel_Bar_Sardo_YogaBenessere_2.jpg',
    },
  ];

  return (
    <>
      <CategoryCards title="Dining" data={diningData} />
      <CategoryCards title="Spa & Wellness" data={spaData} />
    </>
  );
};

export default DiningAndSpa;
