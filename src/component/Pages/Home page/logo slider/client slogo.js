import React from "react";
import "./logo mreeq.css";
import "../../../../App.css";

const ClientLogosss = () => {
  const ClientLogo = [
    {
      path: process.env.PUBLIC_URL + '/assets/OMC-picture/client-logo1.png',
    },
    {
      path: process.env.PUBLIC_URL + '/assets/OMC-picture/client-logo2.png',
    }, {
      path: process.env.PUBLIC_URL + '/assets/OMC-picture/client-logo3.png',
    }, {
      path: process.env.PUBLIC_URL + '/assets/OMC-picture/client-logo4.png',
    }, {
      path: process.env.PUBLIC_URL + '/assets/OMC-picture/client-logo5.png',
    }, {
      path: process.env.PUBLIC_URL + '/assets/OMC-picture/client-logo6.png',
    }, {
      path: process.env.PUBLIC_URL + '/assets/OMC-picture/client-logo7.png',
    }, {
      path: process.env.PUBLIC_URL + '/assets/OMC-picture/client-logo8.png',
    }, {
      path: process.env.PUBLIC_URL + '/assets/OMC-picture/client-logo9.png',
    }, {
      path: process.env.PUBLIC_URL + '/assets/OMC-picture/client-logo10.png',
    }, {
      path: process.env.PUBLIC_URL + '/assets/OMC-picture/client-logo11.png',
    }, {
      path: process.env.PUBLIC_URL + '/assets/OMC-picture/client-logo12.png',
    }, {
      path: process.env.PUBLIC_URL + '/assets/OMC-picture/client-logo13.png',
    }, {
      path: process.env.PUBLIC_URL + '/assets/OMC-picture/client-logo14.png',
    }, {
      path: process.env.PUBLIC_URL + '/assets/OMC-picture/client-logo15.png',
    }, {
      path: process.env.PUBLIC_URL + '/assets/OMC-picture/client-logo16.png',
    }
  ];

  return (
    <div className="Client-logo-container">
      <div className="client-name-that trust us">
        <div className="brand-client">
          <h2 className="heading-client-brand brands-that-trust-us " >Brands that</h2>
          <h2 className="client-heading-trust trust-us brands-that-trust-us" style={{ fontFamily: " bold_stylish" }}>trust us</h2>
        </div>
      </div>

      <div className="marquee">
        <div className="marquee-content">
          {ClientLogo.map((item, index) => (
            <div className="marquee-item" key={index}>
              <img
                src={item.path}
                alt={`client-logo-${index}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientLogosss;
