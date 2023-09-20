import React from 'react';
import "./case-study.css"
import "../home.css";
import { useRef, useEffect } from 'react';
import { useInView } from "react-intersection-observer";
import"../../../../App.css"
export const CaseStudy = () => {
    const videoRef = useRef([]);

    const [videoInView, inViewVideo] = useInView({
        triggerOnce: true,
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
            name: process.env.PUBLIC_URL + '/assets/video/casestudyVideo.mp4',
        },
    ]

    return <>
        <div className="carousel-container">
            <div className='background-opicity-shade' >
                <div className='background-img-url'>
                    <div className='content'>
                        <img className='img-background' src={process.env.PUBLIC_URL + '/assets/backgroundimg/bg.jpg'} alt='background img' />
                        <div className='background-img-opicity'></div>
                    </div>
                    <div className='display-case-study-flex'>

                        <div className="progress-bar-container">
                            <div className="bara">
                                <div className="inner-2">

                                </div>
                            </div>
                        </div>

                        
                        <div className='text-mobile-other-text-container'>
                            <div className='mobiles-case-study'>
                                <section className="mobile-section">
                                    <div className="Mobile-view-icon-container">
                                        <div className="mobile-view-icon">
                                            {video.map((item, index) => (
                                                <div className={`mobile-view-fram ${videoInView ? 'animate-slide-right' : ''}`} key={index}>
                                                    <div className={`mobile-fram ${videoInView ? 'animate-slide-right' : ''}`}>
                                                        <img
                                                            className='img-frame'
                                                            src="https://uploads-ssl.webflow.com/6247189edcd451f2855e1f96/63a5e6058c5e5c486081afa0_iphoneContainer.svg"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div
                                                        className={`mobile-view-video mobile-view-video-data ${videoInView ? 'animate-slide-right' : ''}`}
                                                        style={{ height: '20.7rem', width: '9.9rem' }} >
                                                        <div
                                                            className="mobile-video radius"
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
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                        <div className='case-study-text'>
                            <h2 className='brand-case-study heading-all-component-font-style'>Case Study</h2>
                            <h2 className='barstool heading-all-component-font-style'>Barstool <br /> Sports</h2>
                            <div className='para-div-casestudy'>

                                <p className='barstool-para-casestudy paragrapg-all-component-font-family'>Barstool Sports had a growing online audience that engaged with their blog and large podcast
                                    network. They turned to Coast Digital to help formulate the growth strategy of how to turn
                                    their loyal fans into paying customers.</p>
                            </div>
                            <div className='rating-case-study-container'>

                                <div className='rating-case-study'>
                                    <h3 className='number-case-study heading-all-component-font-style'> 405% </h3>
                                    <p className='para-rating-case-study paragrapg-all-component-font-family'>Facebook ROI in first 12 months managing</p>
                                </div>
                                <div className='rating-case-study'>
                                    <h3 className='number-case-study heading-all-component-font-style'> 545%</h3>
                                    <p className='para-rating-case-study paragrapg-all-component-font-family'>Google Ads ROI in first 12 months managing</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
}