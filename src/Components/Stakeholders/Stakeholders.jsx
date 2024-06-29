import React from 'react';
import FastMarquee from 'react-fast-marquee';
import './Stakeholders.css'; // Import your CSS for styling

const Stakeholders = () => {
  const items = [
    { imageUrl: './Homepage/stake1.svg', title: 'Customers' },
    { imageUrl: './Homepage/stake2.svg', title: 'Employees' },
    { imageUrl: './Homepage/stake3.svg', title: 'Regulatory and Industry Bodies' },
    { imageUrl: './Homepage/stake4.svg', title: 'Media and Analysts' },
    { imageUrl: './Homepage/stake5.svg', title: 'Investors and Shareholders' },
    { imageUrl: './Homepage/stake6.svg', title: 'Communities and NGOs' },
    { imageUrl: './Homepage/stake7.svg', title: 'Suppliers and Partners' },
    // Add more items as needed
  ];

  return (
    <FastMarquee className="marquee my-10" speed={40} gradient={true} loop={0}>
      {items.map((item, index) => (
        <div className="marquee-item" key={index}>
          <img src={item.imageUrl} alt={item.title} className="marquee-item__image" />
          <div className="marquee-item__title">{item.title}</div>
        </div>
      ))}
    </FastMarquee>
  );
};

export default Stakeholders;
