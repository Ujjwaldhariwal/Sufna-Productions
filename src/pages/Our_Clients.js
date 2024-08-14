import React, { Suspense } from 'react';
import './Clients.css';
import LazyLoad from 'react-lazyload';

const clients = [
  { img: 'https://ik.imagekit.io/UjjwalDhariwal/Sufna%20PRoductions/logos/atls.webp?updatedAt=1723621056824' },
  { img: 'https://ik.imagekit.io/UjjwalDhariwal/Sufna%20PRoductions/logos/lifeline.jpg?updatedAt=1723621053485' },
  { img: 'https://ik.imagekit.io/UjjwalDhariwal/Sufna%20PRoductions/logos/Froexastra.jpg?updatedAt=1723621048849' },
  { img: 'https://ik.imagekit.io/UjjwalDhariwal/Sufna%20PRoductions/logos/Youglas.jpg?updatedAt=1723621045298' },
  { img: 'https://ik.imagekit.io/UjjwalDhariwal/Sufna%20PRoductions/logos/slash.png?updatedAt=1723620871960' },
  { img: 'https://ik.imagekit.io/UjjwalDhariwal/Sufna%20PRoductions/logos/wow.png?updatedAt=1723620892189' },
  { img: 'https://ik.imagekit.io/UjjwalDhariwal/Sufna%20PRoductions/logos/music.png?updatedAt=1723620915138' },
  { img: 'https://ik.imagekit.io/UjjwalDhariwal/Sufna%20PRoductions/logos/oswal.png?updatedAt=1723620935242' },
  { img: 'https://ik.imagekit.io/UjjwalDhariwal/Sufna%20PRoductions/logos/ifysi.png?updatedAt=1723621015690' },
  { img: 'https://ik.imagekit.io/UjjwalDhariwal/Sufna%20PRoductions/logos/an.png?updatedAt=1723620966302' },
  { img: 'https://ik.imagekit.io/UjjwalDhariwal/Sufna%20PRoductions/logos/classplus.png?updatedAt=1723620986884' },
  { img: 'https://ik.imagekit.io/UjjwalDhariwal/Sufna%20PRoductions/logos/yakuza.png?updatedAt=1723620830147' },
  { img: 'https://ik.imagekit.io/UjjwalDhariwal/Sufna%20PRoductions/logos/educaptain.jpg?updatedAt=1723620700547' },
];

const Clients = () => {
  return (
    <>
      <br />
      <div className="bg-white-900 text-grey p-8 mt-20">
        <h1>Our Clients</h1>
        <div className="clients-container">
          {clients.map((client, index) => (
            <div key={index} className="client-logo-container">
              <LazyLoad height={200} offset={100} once>
                <img src={client.img} alt={`Client ${index + 1}`} className="client-logo pulse-on-hover" />
              </LazyLoad>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};


export default Clients;
