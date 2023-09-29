import React, { useEffect, useRef } from 'react';
import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/splide/dist/css/themes/splide-default.min.css'; 
import "./home.css";
import mux from "mux-embed";
import"../../../App.css"
function SplideComponent() {

  const videoRef = useRef(null);
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


  useEffect(() => {
    if (videoRef.current) {
      const initTime = Date.now();

      videoRef.current.addEventListener('play', () => {
        mux.monitor(videoRef.current, {
          debug: true,
          data: {
            env_key: "ENV_KEY",
            player_name: "Main Player",
            player_init_time: initTime,
          },
        });
      });
    }
  }, [videoRef]);


  useEffect(() => {
    const splide = new Splide('.splide', {
      type: 'loop',
      drag: 'free',
      focus: 'center',
      perPage: 3,
      autoScroll: {
        interval: 2000,
        speed: 2,
      },
    });

    splide.mount({ AutoScroll });

    return () => {
      splide.destroy();
    };
  }, []);


  return (
    <section className="mobile-section">
      <div className="Mobile-view-icon-container">
        <div className="mobile-view-icon">
          <div className="splide">
            <div className="splide__track">
              <ul className="splide__list">
                {video.map((item, index) => (
                  <li className="splide__slide" key={index}>
                    <div className="mobile-view-fram">
                      <div className="mobile-fram">
                        <img
                          src="https://uploads-ssl.webflow.com/6247189edcd451f2855e1f96/63a5e6058c5e5c486081afa0_iphoneContainer.svg"
                          alt="iphone"
                          loading="lazy"
                        />
                      </div>
                      <div
                        className="mobile-view-video"
                        style={{ height: '20.7rem', width: '9.9rem' }}>
                        <div
                          className="mobile-video"
                          style={{ height: '100%', width: '100%', overflow: 'hidden' }} >
                          <video
                            className="video-tag video-tagvideo"
                            loop
                            autoPlay
                            playsInline
                            muted
                            data-wf-ignore="true"
                            ref={videoRef}
                            src={item.name}
                            style={{ height: "100%", borderRadius: "20px" }}
                            key={index}
                            loading="lazy"
                            preload="none" 
                          />
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SplideComponent;
