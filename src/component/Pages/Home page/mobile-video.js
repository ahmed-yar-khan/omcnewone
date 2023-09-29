import "./home.css";
import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import "../../../App.css"
export const MobileVideo = () => {


  const videoRef = useRef([]);

  const [videoInView, inViewVideo] = useInView({
    triggerOnce: false,
    rootMargin: '-50px',
  });

  useEffect(() => {
    if (inViewVideo) {
      videoRef.current.forEach((video) => {
        video.classList.add("animate-slide-right");
      });
    }
  }, [inViewVideo]);

  const video = [
    {
      name: process.env.PUBLIC_URL + '/assets/video/ads.mp4',
    },
    {
      name: process.env.PUBLIC_URL + '/assets/video/ads1.mp4',
    },
    {
      name: process.env.PUBLIC_URL + '/assets/video/ads2.mp4',
    },
    {
      name: process.env.PUBLIC_URL + '/assets/video/ads3.mp4',
    },
    {
      name: process.env.PUBLIC_URL + '/assets/video/ads4.mp4',
    },
  ];

  return (
    <>

      <section className="mobile-section">
        <div className="Mobile-view-icon-container">
          <div className="mobile-view-icon">
            {video.map((item, index) => (
              <div className={`mobile-view-fram ${videoInView ? 'animate-slide-right' : ''}`} key={index}>
                <div className={`mobile-fram ${videoInView ? 'animate-slide-right' : ''}`}>
                  <img
                    src="https://uploads-ssl.webflow.com/6247189edcd451f2855e1f96/63a5e6058c5e5c486081afa0_iphoneContainer.svg"
                    alt="mobile-iphone"
                    loading="lazy"
                  ></img>
                </div>
                <div
                  className={`mobile-view-video ${videoInView ? 'animate-slide-right' : ''}`}
                  style={{ height: '18.2rem ', width: '8.7rem' }} >
                  <div
                    className="mobile-video"
                    style={{ height: '100%', width: '100%', overflow: 'hidden' }} >
                    <video
                      className={`video-tag video-tagvideo ${videoInView ? 'animate-slide-right' : ''}`}
                      loop
                      autoPlay
                      playsInline
                      muted
                      data-wf-ignore="true"
                      ref={(el) => (videoRef.current[index] = el)}
                      src={item.name}
                      style={{ height: "100%", borderRadius: "20px" }}
                      loading="lazy"
                      key={index}
                      preload="none" 
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
