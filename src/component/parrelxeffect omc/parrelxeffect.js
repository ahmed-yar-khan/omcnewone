import React from 'react';
import { Parallax } from 'react-parallax'; // Import Parallax from the library
import './parrelx.css'; // Import your CSS file for styling
import { Link } from 'react-router-dom';

const ParallaxComponent = () => {
  return (
    <Parallax className='parallax-image'  bgImage="/assets/backgroundimg/parralx.jfif" bgImageAlt="the cat" strength={200} >
      <div className="parallax-content">
        <img
          src="/assets/OMC-picture/omc-logo.png"
          alt="Big Logo"
          className="logo"
        />
        <h1 className='online-sucess-begins'>Online Media Circle: Where Your Online Marketing Success Begins!</h1>
        <Link to="/contact us">
          <button className='contact-us-btn-parralx'>Contact Us</button>
        </Link>
      </div>
    </Parallax>
  );
};

export default ParallaxComponent;