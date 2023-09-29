import "./web.css"
import "../../../../App.css"
import mux from "mux-embed";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ParallaxComponent from "../../../parrelxeffect omc/parrelxeffect";
export const WebDesgin = () => {

    const videoRef = useRef(null);

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

    const itemVariants = {
        hidden: { y: 100, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    };

    const [refwebsite1, inViewwebsite1] = useInView({
        triggerOnce: true, 
        threshold: 0.1, 
    });
    const [refwebsite2, inViewwebsite2] = useInView({
        triggerOnce: true, 
        threshold: 0.1, 
    });
    const [refwebsite3, inViewwebsite3] = useInView({
        triggerOnce: true, 
        threshold: 0.1, 
    });
    const [refwebsite4, inViewwebsite4] = useInView({
        triggerOnce: true, 
        threshold: 0.1,
    });
    const [refwebsite5, inViewwebsite5] = useInView({
        triggerOnce: true, 
        threshold: 0.1, 
    });
    const [refwebsite6, inViewwebsite6] = useInView({
        triggerOnce: true, 
        threshold: 0.1, 
    });
    const [refwebsite7, inViewwebsite7] = useInView({
        triggerOnce: true, 
        threshold: 0.1, 
    });



    return <>
        <div className="section-website">
            <div className="section-website-solution web-img">
                <div className="content-container-display" >
                    <motion.div

                        ref={refwebsite1} 
                        initial="hidden"
                        animate={inViewwebsite1 ? "visible" : "hidden"} 
                        variants={itemVariants}
                        transition={{ duration: 1, ease: "linear" }}
                    >
                        <div className="content-website-section1">
                            <h2 className="website-soloution-title heading-all-component-font-style">
                                Website Design and <br /> Development
                            </h2>
                            <p className="paragrapg-all-component-font-family" >
                                Our designers and developers are precocious, passionate
                                and have the vision and talent for conquering none less
                                than extraordinary. Our team is focused upon each design
                                element which entices the users to explore further in.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
            <div className="section2-web-soloution-container">
                <div className="web-soloution-left-right-video-content">
                    <div className="video-white">


                        <video
                            className="white-background-video"
                            loop
                            autoPlay
                            playsInline
                            muted
                            data-wf-ignore="true"
                            ref={videoRef}
                            src='/assets/video/computer-white-background.mp4'
                            loading="lazy"
                            preload="none" 
                        />
                    </div>
                    <div className="section2-web-soloution-content">
                        <motion.div

                            ref={refwebsite2} 
                            initial="hidden"
                            animate={inViewwebsite2 ? "visible" : "hidden"} 
                            variants={itemVariants}
                            transition={{ duration: 1, ease: "linear" }}
                        >
                            <h5 className="h5-web-soloution-content paragrapg-all-component-font-family">We believe Website experience is like a first Date,
                                and first impression matters a lot. A Responsive
                                Website simply allow users to find what they are
                                looking for. We combine exceptional design and
                                strategy with our streamlined Design and Development
                                process. After all your Website is your most
                                powerful tool Digital Marketing Tool.</h5>
                            <div className="double-para-section2">
                                <p className="para-sec-web-content paragrapg-all-component-font-family">
                                    Our building process is never an afterthought. We learn all we can about
                                    your management workflow so that we can make recommendations that
                                    are always customized as per your needs.
                                </p>
                                <p className="para-sec-web-content paragrapg-all-component-font-family">
                                    Your brand is what guides us in everything we do. We think of your customers'
                                    experience as we develop an interface that guides them down the right path
                                    without getting in their way.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
            <div className="section2-background">
                <div className="web-soloution-left-right-video-content">

                    <div className="section2-web-soloution-content-background-black ">
                        <motion.div

                            ref={refwebsite3} 
                            initial="hidden"
                            animate={inViewwebsite3 ? "visible" : "hidden"} 
                            variants={itemVariants}
                            transition={{ duration: 1, ease: "linear" }}
                        >
                            <h5 className="h5-web-soloution-contentd heading-all-component-font-style">Unrivalled Levels of Service</h5>
                            <div className="double-para-section2">
                                <p className="para-sec-web-content paragrapg-all-component-font-family">
                                    We build things that are useful and we love building solutions
                                    that provide intuitive experience. We are smart and reliable
                                    partners in solving your problems. We are better together.
                                </p>

                            </div>
                        </motion.div>
                    </div>
                    <div className="video-black">
                        <video
                            className="video-side"
                            loop
                            autoPlay
                            playsInline
                            muted
                            data-wf-ignore="true"
                            ref={videoRef}
                            src="/assets/video/clock-black-background.mp4"
                            loading="lazy"
                            preload="none" 
                        />
                    </div>
                </div>
            </div>

            <div className="back-monitor">
                <div className="si-container-card-animated">

                    <div className="row">
                        <div className='display-responsive'>



                            <div className="col-md-3 col-sm-6">
                                <motion.div

                                    ref={refwebsite4} 
                                    initial="hidden"
                                    animate={inViewwebsite4 ? "visible" : "hidden"} 
                                    variants={itemVariants}
                                    transition={{ duration: 1, ease: "linear" }}
                                >
                                    <div className="service_box">
                                        <div className="service_icon">
                                            <img className='icon-img-si-card' src='/assets/icon/content.png' alt='video icon'  loading="lazy"/>
                                        </div>
                                        <h3>Content + Strategy</h3>
                                        <p className="paragrapg-all-component-font-family">
                                            We emphasize clear and direct content that people can understand and act on. We path the best routes through your content to the lead-generating end points. We work with you to understand your positioning and messaging and how to best articulate it.
                                        </p>
                                    </div>
                                </motion.div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <motion.div

                                    ref={refwebsite5} 
                                    initial="hidden"
                                    animate={inViewwebsite5 ? "visible" : "hidden"} 
                                    variants={itemVariants}
                                    transition={{ duration: 1, ease: "linear" }}
                                >
                                    <div className="service_box">
                                        <div className="service_icon">
                                            <img className='icon-img-si-card' src='/assets/icon/cms.png' alt='video icon' loading="lazy" />
                                        </div>
                                        <h3>Integrations + CMS</h3>
                                        <p className="paragrapg-all-component-font-family">
                                            We integrate the leading eCommerce platforms, APIs, gateways and all type Web Services to combine powerful features and tools that allow us to build robust and easy to use web Applications. We develop admin interfaces for you that are intuitive and easy to use.
                                        </p>
                                    </div>
                                </motion.div>
                            </div>

                        </div>

                        <div className='display-responsive'>

                            <div className="col-md-3 col-sm-6">
                                <motion.div
                                    ref={refwebsite6} 
                                    initial="hidden"
                                    animate={inViewwebsite6 ? "visible" : "hidden"} 
                                    variants={itemVariants}
                                    transition={{ duration: 1, ease: "linear" }}
                                >

                                    <div className="service_box">
                                        <div className="service_icon">
                                            <img className='icon-img-si-card' src='/assets/icon/web-desgin-direction.webp' alt='video icon'  loading="lazy"/>
                                        </div>
                                        <h3>Design + Direction</h3>
                                        <p className="paragrapg-all-component-font-family">
                                            We create customized, responsive and functional UX/UI Designs. We work with you to extend your brand elements and bring them to life on the screen ensuring that your brand voice is consistent across everything that your customers will experience.
                                        </p>
                                    </div>
                                </motion.div>
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <motion.div

                                    ref={refwebsite7} 
                                    initial="hidden"
                                    animate={inViewwebsite7 ? "visible" : "hidden"} 
                                    variants={itemVariants}
                                    transition={{ duration: 1, ease: "linear" }}
                                >

                                    <div className="service_box">
                                        <div className="service_icon">
                                            <img className='icon-img-si-card' src='/assets/icon/app_development+tecnology.png' alt='video icon' loading="lazy" />
                                        </div>
                                        <h3>Dvelopment + Technology</h3>
                                        <p className="paragrapg-all-component-font-family ">
                                            We’ve worked with almost every technology, if you want we can make it work for you. Our highly sophisticated team has the ability to conquer the problems faced by the industries. As we develop for the now and build for the future, We secure it by our hearts.
                                        </p>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ParallaxComponent/>
        </div>



    </>
}