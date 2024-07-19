import React from 'react';
import './Clients.css';
import img1 from '../img/Logo/1.png';
import img2 from '../img/Logo/2.png';
import img3 from '../img/Logo/3.png';
import img4 from '../img/Logo/4.png';
import img5 from '../img/Logo/5.png';
import img6 from '../img/Logo/6.png';
import img7 from '../img/Logo/7.png';
import img8 from '../img/Logo/8.png';
import img9 from '../img/Logo/9.png';
import img10 from '../img/Logo/10.png';

const Clients = () => {
  const clients = [
    { img: img1 },
    { img: img2 },
    { img: img3 },
    { img: img4 },
    { img: img5 },
    { img: img6 },
    { img: img7 },
    { img: img8 },
    { img: img9 },
    { img: img10 },
  ];

  return (
    <>
      <br />
      <div className="bg-white-900 text-grey p-8 mt-20">
        <h1>Our Clients</h1>
        <div className="clients-container">
          {clients.map((client, index) => (
            <div key={index} className="client-logo-container">
              <img src={client.img} alt={`Client ${index + 1}`} className="client-logo pulse-on-hover" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Clients;
