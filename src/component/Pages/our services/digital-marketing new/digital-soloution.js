import './digital-merketing.css'; // Make sure to import your CSS file with the correct name.
import '../../../../App.css';
import React, { useEffect } from 'react';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ParallaxComponent from '../../../parrelxeffect omc/parrelxeffect';
export const DigitalSolution = () => {

  const data = [
    {
      img: '/assets/backgroundimg/backgroung/Video-Advertising (1).png',
      heading: 'Video Advertising',
      text:
        'Compared to traditional television advertising, Online video advertising can immediately invite large-scale viewers from different platforms to interact with the advertisement with lower costs to the business.',
    },
    {
      img: '/assets/backgroundimg/backgroung/PPC (2).png',
      heading: 'PPC Remarketing',
      text:
        'PPC Remarketing services are the techniques that are aimed at bringing consumers from the dynamic platforms through remarketing your ads on a strategy based on your business goals and targets.',
    },
    {
      img: '/assets/backgroundimg/backgroung/laptop-iphone-mockup-logos.png',
      heading: 'Social Advertising',
      text:
        'Social Advertising means expanding your digital footprint and bring more consumers on the doorsteps. We apply customized content strategy approach to help your business to gain better ROI.',
    },
    {
      img: '/assets/backgroundimg/backgroung/content-prepration.png',
      heading: 'Content Preparation',
      text:
        'Content must be clearer, more compelling and directly digestible to broadcast your message in a stronger way. Our content manageability processes will save time, reduce confusions, minimize errors and qualify revisions.',
    },
  ];


    // Create a custom variant for animations
    const itemVariants = {
      hidden: { y: 200, opacity: 0 },
      visible: { y: 0, opacity: 1 },
    };

    // Use the inView hook to trigger animations
    const [refdigital1, inViewdigital1] = useInView({
      triggerOnce: true, // Trigger animation only once
      threshold: 0.1, // Adjust this threshold as needed
    });



  const cardData = [
    { id: 1, title: 'Brand Monitoring' },
    { id: 2, title: 'Setup & Custom Profile Design' },
    { id: 3, title: 'Social Media Management' },
    { id: 4, title: 'Social Media Contents' },
  ];

  const useParallaxTiltEffect = () => {
    const handleMouseMove = (event, container, tiltEffect) => {
      const { offsetX, offsetY } = event;
      let X;
      let Y;

      if (tiltEffect === 'reverse') {
        X = ((offsetX - container.offsetWidth / 2) / 3) / 3;
        Y = (-(offsetY - container.offsetHeight / 2) / 3) / 3;
      } else if (tiltEffect === 'normal') {
        X = (-(offsetX - container.offsetWidth / 2) / 3) / 3;
        Y = ((offsetY - container.offsetHeight / 2) / 3) / 3;
      }

      const rX = X.toFixed(2);
      const rY = Y.toFixed(2);
      const bY = `${80 - (X / 4).toFixed(2)}%`;
      const bX = `${50 - (Y / 4).toFixed(2)}%`;

      container.style.transform = `rotateX(${rX}deg) rotateY(${rY}deg)`;
      container.style.backgroundPosition = `${bX} ${bY}`;
    };

    const handleMouseEnter = (container) => {
      container.classList.add('container--active');
    };

    const handleMouseLeave = (container) => {
      container.classList.remove('container--active');
    };

    return { handleMouseMove, handleMouseEnter, handleMouseLeave };
  };


  const { handleMouseMove, handleMouseEnter, handleMouseLeave } = useParallaxTiltEffect();

  useEffect(() => {
    const cardContainers = document.querySelectorAll('.card-container');

    cardContainers.forEach((container, index) => {
      const tiltEffect = index % 2 === 0 ? 'reverse' : 'normal';

      container.addEventListener('mousemove', (event) => {
        handleMouseMove(event, container, tiltEffect);
      });

      container.addEventListener('mouseenter', () => {
        handleMouseEnter(container);
      });

      container.addEventListener('mouseleave', () => {
        handleMouseLeave(container);
      });
    });


    return () => {
      // Clean up event listeners if necessary
      cardContainers.forEach((container, index) => {
        const tiltEffect = index % 2 === 0 ? 'reverse' : 'normal';

        container.removeEventListener('mousemove', (event) => {
          handleMouseMove(event, container, tiltEffect);
        });

        container.removeEventListener('mouseenter', () => {
          handleMouseEnter(container);
        });

        container.removeEventListener('mouseleave', () => {
          handleMouseLeave(container);
        });
      });
    };
  }, [handleMouseEnter, handleMouseLeave, handleMouseMove]);
  return (
    <div>
      <div className="digital-img"></div>

      <div className="heading-digital-marketing-agency">
        <h2 className="heading-digital-marketing heading-all-component-font-style">
          Professional Tools for Attracting Strangers
        </h2>
        <div className="h5-heading-text-para-digital-marketing heading-all-component-font-style">
          Expand online branding through social content and engagements.
        </div>
      </div>

        <div className="container-section-digital">
          <motion.div
              className='section-padding-mobile-view'
            ref={refdigital1} // Attach the ref to the container
            initial="hidden"
            animate={inViewdigital1 ? "visible" : "hidden"} // Animate when inView is true
            variants={itemVariants}
    
          >
          {data.map((item, index) => (
            <div
              className={`digitalsection ${index % 2 === 0 ? 'left' : 'right'
                }`}
              key={index}
            >
              <div className="side">

                <img
                  className="img-mobile-app"
                  src={item.img}
                  alt={`Product ${index} Thumbnail`}
                  style={{ width: '650px', height: '300px' }}
                  loading="lazy"
                />
              </div>
              <div className="c">
                <h5 className="title-video-advertising heading-all-component-font-style">
                  {item.heading}
                </h5>
                <div className="para-container-digital-marketing">
                  <p className="para-p-video-advertising paragrapg-all-component-font-family">
                    {item.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
          </motion.div>
        </div>
      <div className="content-background-img-fixed-container">
        <div className="social-media-promotion">
          <h1 className="heading-all-component-font-style head">Social Media Promotion</h1>
        </div>
        <div className="content-background-img-fixed-child">
          <div className="content-2content">
            {[
              {
                title: 'CONTENT MARKETING',
                text: "If your content (or marketing Campaign) is not engaging your visitors than it means you’re losing ROI. Don't worry we are experts in creating inspirational content and have marketing techniques that can generate Consumers.",
              },
              {
                title: 'GREAT RANKINGS',
                text: "The right type of social media content that is published on a regular basis can make a huge difference to your overall content marketing campaign. When your social media posts starts to get crawled by search engines, you will watch things getting better.",
              },
            ].map((item, index) => (
              <div className="content-para1" key={index}>
                <h1 className=" heading-all-component-font-style">{item.title}</h1>
                <p className="paragrapg-all-component-font-family">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>




      <section className="main">
        {cardData.map((data) => (
          <div className={`wrap wrap--${data.id}`} key={data.id}>
            <div className={`container background${data.id} container--${data.id} card-container`}>
              <p className="paragrapg-all-component-font-family" style={{ fontSize: "40px!important" }}>{data.title}</p>
            </div>
          </div>
        ))}
      </section>
<ParallaxComponent/>
    </div>
  );
};

export default DigitalSolution;
