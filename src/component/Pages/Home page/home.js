import "./home.css"
import { MobileVideo } from "./mobile-video"
import mux from "mux-embed";
import React, { useEffect, useRef, useState } from "react";
import CardGrid from "./card";
import SplideComponent from "./moile-video-slider";
import CardGridSlider from "./card-slider";
import { CaseStudy } from "./case study/case-study";
import "../../../App.css"
import "./4section-content-why-choose-omc/contentOmc.css"
import ClientLogosss from "./logo slider/client slogo";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ParallaxComponent from "../../parrelxeffect omc/parrelxeffect";
export const Home = () => {

  const videoRef = useRef(null);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 1260);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1180);



  let content = [
    {
      para: "Why would you work with an SEO services firm that doesn’t provide you with the results you are looking for? Stop throwing away your hard-earned money on a strategy that isn’t converting. ",
      head: "We Have Proven Results"
    }, {
      para: "At Online Media Circle, we believe in honesty, integrity, and respecting our clients. We don’t believe in “selling” a service that you don’t need or applying a one-size-fits-all approach to each client. ",
      head: "We Are Honest & Ethical"
    }, {
      para: "Working with an digital marketing company that actually knows digital marketing seems obvious, but unfortunately, many firms fail to deliver positive results. Our strategies are proven to work. ",
      head: "We Know Digital Marketing"
    }, {
      para: "Maintaining a customer-centric focus is a priority for many marketing agencies, however, few actually follow through. As a SEO Agency, Online Media Circle is different.",
      head: "We Put Customers First"
    }
  ]


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1180);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 1260);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


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
    hidden: { y: 200, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };


  const [refhome1, inViewhome1] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [refhome2, inViewhome2] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [refhome3, inViewhome3] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [refhome4, inViewhome4] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return <>

    <section className="hero-section-container">
      {/*--------------------     background video first section of home page start     ---------------- */}
      <section className="home-first-section-background-video-container">
        <div className="home-first-section-background-video">
          <video
            className="video-tag-home-section-background"
            loop
            autoPlay
            playsInline
            muted
            data-wf-ignore="true"
            ref={videoRef}
            src={process.env.PUBLIC_URL + '/assets/video/background2.mp4'}
            loading="lazy"
            preload="none" 
          />
        </div>
      </section>

      {/*--------------------     background video first section of home page end    ---------------- */}
      <div className="mobiles">
        <div className="ad-heading-container">

        </div>
        {

          isMobileView ? <SplideComponent /> : <MobileVideo />
        }
      </div>
      {/*--------------------  section 3 card what we do start    ---------------- */}
      <section className="home-third-section-container">
        <div className="display-home-third-section-heading">
          <div className="home-third-section-text">
            <h2 className="what-we-do-Text heading-all-component-font-style">
              <span className="color-3rd-section-heading heading-all-component-font-style">What</span> <span className="Do-text-color heading-all-component-font-style">we Do</span>
            </h2>
          </div>
          <div className="main-container-card-3rd-section">
            <div className="child-container-card-style">
              <motion.div

                ref={refhome1}
                initial="hidden"
                animate={inViewhome1 ? "visible" : "hidden"}
                variants={itemVariants}

              >
                <div className="position-relative-vertical-card animated">
                  <div className="vertical-card">
                    <div className="background-change">
                      <h2 className="card-3rd-head heading-all-component-font-style">
                        <span className="digital-color heading-all-component-font-style">Digital</span> <br /> <span className="marketing-color heading-all-component-font-style">Marketing</span>
                      </h2>
                      <p className="card-3rd-para paragrapg-all-component-font-family">
                        Brandformance<br />
                        Performance Marketing<br />
                        Growth Marketing<br />
                        Digital Strategies <br />
                        Inbound Marketing <br />
                        Lead Generation <br />
                        Digital Strategies <br />
                        Keyword Research <br />
                        Content Strategy
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row-card">
                </div>
              </motion.div>
            </div>
            {
              isMobile ? <CardGridSlider /> : <CardGrid />
            }
          </div>
          <div className="target-animate">
            <div className="animate "></div>
          </div>
        </div>
      </section>

      {/*--------------------  section 3 card what we do close      ---------------- */}
      {/*--------------------  section 4 content why choose omc      ---------------- */}

      <div className="content-omc-why-choose-omc-container">

        <div className="content-omc-heading">
          <div className="Digital-Marketing-Agency-heading alignfull.border">
            <h2 className="h2-digital-marketing heading-all-component-font-style"><span className="content-color-responsive heading-all-component-font-style">Why Choose <span className="red heading-all-component-font-style" > Online</span> <span className="blue heading-all-component-font-style">Media</span> <span className="yellow">Circle</span> For Your </span><span className="digital-marketing-color heading-all-component-font-style"> Digital Marketing Agency? </span></h2>
          </div>

        </div>
        <div className="content-para-why-choose">
          <motion.div

            ref={refhome4}
            initial="hidden"
            animate={inViewhome4 ? "visible" : "hidden"}
            variants={itemVariants}

          >
            <div id="animationSection" className="animation-content ">
              <p className="content-para-why paragrapg-all-component-font-family">Online Media Circle is a full-service digital marketing agency. We’ve been providing a wide range of services to clients of all industries since 2005.
                Our digital marketing services include consulting and management options for a variety of online marketing tactics including search
                engine optimization (SEO), pay-per-click (PPC) ads, Amazon store optimization, copywriting, conversion rate optimization (CRO), and
                more. We also offer expert web design and development services for both eCommerce and B2B companies. Don’t just partner with any
                digital marketing agency; work with a company you can trust.</p>
            </div>
          </motion.div>
        </div>

        <div className="meet-our-team-container">

          <div id="teamSection" className="content-meet-our-team-container ">
            <h3 className="heading-meet-our-team heading-all-component-font-style">
              <span className="meet-our-color heading-all-component-font-style">Meet our team of </span>
              <span className="color-marketing-experts heading-all-component-font-style">digital marketing experts</span>
            </h3>
            <motion.div

              ref={refhome3}
              initial="hidden"
              animate={inViewhome3 ? "visible" : "hidden"}
              variants={itemVariants}

            >

              <p className="para-meet-our-team paragrapg-all-component-font-family">
                You might have a website, but it isn’t doing your business much
                good if it isn’t being picked up by the search engines. To make
                sure customers find your site online, we can take your online
                presence to the next level — your website design, copywriting,
                keywords, social media presence and more. Working with us, you
                get the most from your return on marketing investment.
              </p>
            </motion.div>
            <p className="strong-para-meet-our-team paragrapg-all-component-font-family">
              <strong>Here are some reasons why:</strong>
            </p>
          </div>
          <div className="img-team ">
            <img className="img-team-pic"
             src={process.env.PUBLIC_URL + '/assets/OMC-picture/pexels-mikael-blomkvist-6476260.jpg'} 
             alt="team pic"
             loading="lazy"
             />
          </div>
        </div>

        <motion.div

          ref={refhome2}
          initial="hidden"
          animate={inViewhome2 ? "visible" : "hidden"}
          variants={itemVariants}

        >
          <div className="content-four-card-some-reason-why-container">
            {content?.map(item => (
              <div className="content-four-card-some-reason-why" key={item.head}>
                <h4 className="content-four-card-heading heading-all-component-font-style">{item.head}</h4>
                <p className="content-four-card-para paragrapg-all-component-font-family">{item.para}</p>
              </div>
            ))}

          </div>
        </motion.div>
      </div>
      {/*--------------------  section 5 content why choose omc      ----------------*/}
      <CaseStudy />
      {/*--------------------  section 5 content why choose omc      ----------------*/}
      {/*--------------------  section 6 client-logo   ----------------*/}
      <ParallaxComponent />
      <ClientLogosss />
    </section>

  </>

}
