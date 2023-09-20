import "../../../App.css";
import React from "react";
import "./about.css";
import SplideSlider from "./about-client-slider";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ParallaxComponent from "../../parrelxeffect omc/parrelxeffect";
const About = () => {
    const about_data = [
        {
            img: "/assets/icon/message-remove-icon.png",
            title: "Excellent Support",
            para:
                "Our trained and experienced teams welcomes your digital Requirements with monitoring, maintenance and end-to-end support.",
        },
        {
            img: "/assets/icon/team-management-7128077-5791955.webp",
            title: "Enthusiast Team",
            para:
                "Our Tech veterans nurture the technologists who positively impact our clients and society, and inspire our industry to continually improve.",
        },
        {
            img: "/assets/icon/intro-1-mobile.png",
            title: "Industry Solutions",
            para:
                "We provide the integrated, reliable, lucrative and User-centric Business Solution to help companies grow with better ROI.",
        },
    ];

    const itemVariants = {
        hidden: { y: -200, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    };

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.7, 
    });
    const [ref1, inView1] = useInView({
        triggerOnce: true, 
        threshold: 0.1,
    });
    const [ref4, inView4] = useInView({
        triggerOnce: true, 
        threshold: 0.7,
    });

    return (
        <div className="background">
            <section className="about-section-main-container">
                <div className="about-us-page">
                    <div className="heightOfSection">
                        <section className="section  padding-section">
                        
                                <div className="content1">
                                    <h1 className="about-heading-about-us heading-all-component-font-style">About Us</h1>
                                    <h3 className="border-para-content-heading paragrapg-all-component-font-family">We are the Digital Artisan for your Business</h3>
                                    <p className="border-para-content-para paragrapg-all-component-font-family">We have a reputation for software excellence, cutting
                                        edge technology, techniques and top-tier leadership.
                                        Rooted in a culture of learning and sharing. We’ve
                                        pioneered techniques that harness the power of industry
                                        veterans to deliver software excellence at scale.</p>
                                </div>
                                <div className="flex-data flex-data-section1">
                                    <div className="data-flex-para-about">
                                        <p className="about-us-para paragrapg-all-component-font-family">With our vast experience in custom systems and agile
                                            software delivery, we’re at the front of defining the
                                            tech principles used by some of the world’s most successful
                                            organizations.
                                            OMC have invested in building on the strategy, design, data
                                            and engineering capabilities required to bring a truly integrated
                                            approach to solving our client's toughest challenges.
                                        </p>
                                    </div>
                                </div>
                           
                        </section>
                    </div>
                    <div className="section2-about-us-main-container">
                    <motion.div
                                   
                                    ref={ref} 
                                    initial="hidden"
                                    animate={inView ? "visible" : "hidden"} 
                                    variants={itemVariants}
                                    // transition={{ duration: 1, delay: 1 }}
                           
                                >
                        <div className="title-text-wrap">
                            <h1 className=" heading-title heading-all-component-font-style">
                                Values that we offer
                            </h1>
                        </div>
                        </motion.div>
                        <section className="section4">
                            {about_data.map((item, index) => (
                                <motion.div
                                    className="content content4"
                                    key={index}
                                    ref={ref} 
                                    initial="hidden"
                                    animate={inView ? "visible" : "hidden"}
                                    variants={itemVariants}
                                 
                           
                                >
                                    <div className="img-aboutus-icon">
                                        <img
                                            className="icon-img-3-card"
                                            src={item.img}
                                            alt={`icon-${index}`}
                                        />
                                    </div>
                                    <h2 className="section-4-content-about-us-heading heading-all-component-font-style">
                                        {item.title}
                                    </h2>
                                    <p className="section-4-content-about-us-para paragrapg-all-component-font-family">
                                        {item.para}
                                    </p>
                                </motion.div>
                            ))}
                        </section>
                    </div>
                    <section className="content-about-section">
                        <div className="container-about-section3">
                        <motion.div
                                className="section section3"
                                ref={ref1} 
                                initial="hidden"
                                animate={inView1 ? "visible" : "hidden"}
                                variants={itemVariants}
                 

                            >
                            <div className="content-div-about">
                                <h1 className="heading-about heading-all-component-font-style">Our Vision</h1>
                                <p className="para-about paragrapg-all-component-font-family">Markets are shaped by people, people who, either through the
                                    expression of their own, individual needs or the expression of needs as a result of their
                                    connection to organisations and companies, make up the true origin of the business value
                                    present in said markets.
                                    MarketinLife understands that the true value of business occurs via cooperation between
                                    companies and consumers in the production of goods and services. This cooperation is
                                    fundamental and can be achieved by actively listening to the markets and by introducing
                                    a work model that facilitates communication between the brands themselves and their target
                                    audience.

                                    Technology is reshaping industries and customer expectations at an unprecedented rate,
                                    OMC grows the champion for Digital excellency to help you think big, move fast, and
                                    deliver values with the right skills at the right time.
                                </p>
                            </div>
                            </motion.div>
                        </div>
                    </section>
                    <div className="about-us-section3">
                    <motion.div
                                    className="about-us-section3"
                                    ref={ref4} 
                                    initial="hidden"
                                    animate={inView4 ? "visible" : "hidden"}
                                    variants={itemVariants}
                           
                                >

                        <SplideSlider />
                                </motion.div>

                    </div>
                </div>
            </section>
            <ParallaxComponent/>
        </div>
    );
};

export default About;


