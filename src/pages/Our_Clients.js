import React, { Suspense } from 'react';
import './Clients.css';
import LazyLoad from 'react-lazyload';

const clients = [
  { img: 'https://ik.imagekit.io/UjjwalDhariwal/Sufna%20PRoductions/lifeline.jpg?updatedAt=1722362847245' },
  { img: 'https://ik.imagekit.io/UjjwalDhariwal/Sufna%20PRoductions/educaptain.jpg?updatedAt=1722363391309' },
  { img: 'https://ik.imagekit.io/UjjwalDhariwal/Sufna%20PRoductions/Youglas.jpg?updatedAt=1722363040611' },
  { img: 'https://ik.imagekit.io/UjjwalDhariwal/Sufna%20PRoductions/atls.webp?updatedAt=1722360727002' },
  { img: 'https://ik.imagekit.io/UjjwalDhariwal/Sufna%20PRoductions/2.png?updatedAt=1721990905385' },
  { img: 'https://ik.imagekit.io/UjjwalDhariwal/Sufna%20PRoductions/4.png?updatedAt=1721990377578' },
  { img: 'https://ik.imagekit.io/UjjwalDhariwal/Sufna%20PRoductions/5.png?updatedAt=1721990377554' },
  { img: 'https://ik.imagekit.io/UjjwalDhariwal/Sufna%20PRoductions/6.png?updatedAt=1721990377826' },
  { img: 'https://ik.imagekit.io/UjjwalDhariwal/Sufna%20PRoductions/7.png?updatedAt=1721990377711' },
  { img: 'https://ik.imagekit.io/UjjwalDhariwal/Sufna%20PRoductions/8.png?updatedAt=1721990377475' },
  { img: 'https://ik.imagekit.io/UjjwalDhariwal/Sufna%20PRoductions/9.png?updatedAt=1721990377540' },
  { img: 'https://ik.imagekit.io/UjjwalDhariwal/Sufna%20PRoductions/10.png?updatedAt=1721990905280' },
  { img: 'https://ik.imagekit.io/UjjwalDhariwal/Sufna%20PRoductions/Froexastra.jpg?updatedAt=1722363039983' },
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
