import React from 'react';
import './si.css'; // Make sure to import your CSS file
import "../../../../../App.css"
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ParallaxComponent from '../../../../parrelxeffect omc/parrelxeffect';
export const SystemIntegration = () => {



  // Create a custom variant for animations
  const itemVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  // Use the inView hook to trigger animations
  const [refwebsite1, inViewwebsite1] = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.1, // Adjust this threshold as needed
  });
  const [refwebsite2, inViewwebsite2] = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.1, // Adjust this threshold as needed
  });
  const [refwebsite3, inViewwebsite3] = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.1, // Adjust this threshold as needed
  });
  const [refwebsite4, inViewwebsite4] = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.1, // Adjust this threshold as needed
  });




  return (
    <div className="main-container-">
      <div className="si-main-container">
        <div className="si-child-container">
          <div className="overview-container-si">
            <div className="border-radius">
              <div className="img-si">
                <img className="si-img" src="/assets/backgroundimg/section-imgs/about-us.png" alt="si" />
              </div>
            </div>
            <div className="content-main">
              <motion.div

                ref={refwebsite1} // Attach the ref to the container
                initial="hidden"
                animate={inViewwebsite1 ? "visible" : "hidden"} // Animate when inView is true
                variants={itemVariants}
                transition={{ duration: 1, ease: "linear" }}
              >

                <div className="para-content-div-child-container">
                  <h2 className="para-content-heading-si heading-all-component-font-style ">System Integration</h2>
                  <p className="para-content-si paragrapg-all-component-font-family">
                    A well balanced plan for success in your
                    business requires high skills and high availability
                    of your technical needs to overcome the risks - that’s
                    where we at System Integrations come in. From creating
                    complex information systems to crafting a custom Business
                    solution that may include designing or building a customized
                    architecture or application, integrating it with hardware and
                    communications. We develop enterprise-wide Service-Oriented
                    Architectures that are designed to deploy all services related
                    to business processes, technical tasks and data access using
                    the same business logic interface and integration services.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>

      <div className='si-data-img-div'>
        <img className='si-data-img' src='/assets/backgroundimg/si.png' alt='' />
      </div>
      <div className="si-container-card-animated">

        <div className="row">
          <div className='display-responsive'>


            <div className="col-md-3 col-sm-6">
              <motion.div

                ref={refwebsite2} // Attach the ref to the container
                initial="hidden"
                animate={inViewwebsite2 ? "visible" : "hidden"} // Animate when inView is true
                variants={itemVariants}
                transition={{ duration: 1, ease: "linear" }}
              >

                <div className="service_box">
                  <div className="service_icon">
                    <img className='icon-img-si-card' src='/assets/icon/video (1).png' alt='video icon' />
                  </div>
                  <h3 className='heading-all-component-font-style '>Data Integration Services</h3>
                  <p className='paragrapg-all-component-font-family'>
                    We design automated integration services for applications, file formats and Databases ensuring complete data integrity. We integrate multiple data types, best practices and proven version control protocols.
                  </p>
                </div>
              </motion.div>
            </div>
            <div className="col-md-3 col-sm-6">
              <motion.div

                ref={refwebsite3} // Attach the ref to the container
                initial="hidden"
                animate={inViewwebsite3 ? "visible" : "hidden"} // Animate when inView is true
                variants={itemVariants}
                transition={{ duration: 1, ease: "linear" }}
              >

                <div className="service_box">
                  <div className="service_icon">
                    <img className='icon-img-si-card' src='/assets/icon/video (2).png' alt='video icon' />
                  </div>
                  <h3 className='heading-all-component-font-style '>API Integration Services</h3>
                  <p className='paragrapg-all-component-font-family'>
                    We utilize best practices when integrating custom built, open-source and third-party APIs, adding web service functionality to applications and synchronizing data formats across applications.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          <div className='display-responsive'>

            <div className="col-md-3 col-sm-6">
              <motion.div

                ref={refwebsite4} // Attach the ref to the container
                initial="hidden"
                animate={inViewwebsite4 ? "visible" : "hidden"} // Animate when inView is true
                variants={itemVariants}
                transition={{ duration: 1, ease: "linear" }}
              >

                <div className="service_box">
                  <div className="service_icon">
                    <img className='icon-img-si-card' src='/assets/icon/video (3).png' alt='video icon' />

                  </div>
                  <h3 className='heading-all-component-font-style '>Enterprise Application Services</h3>
                  <p className='paragrapg-all-component-font-family'>
                    Our system integration specialists provide Enterprise Application Integration (EAI) solutions, facilitating seamless communications between mission-critical business platforms.
                  </p>
                </div>
              </motion.div>
            </div>
            <div className="col-md-3 col-sm-6">
              <motion.div

                ref={refwebsite4} // Attach the ref to the container
                initial="hidden"
                animate={inViewwebsite4 ? "visible" : "hidden"} // Animate when inView is true
                variants={itemVariants}
                transition={{ duration: 1, ease: "linear" }}
              >

                <div className="service_box">
                  <div className="service_icon">
                    <img className='icon-img-si-card' src='/assets/icon/video (4).png' alt='video icon' />
                  
                  </div>
                  <h3 className='heading-all-component-font-style '>Service Oriented Architecture</h3>
                  <p className='paragrapg-all-component-font-family'>
                    We provide end to end system integration services to our clients, including integration of systems with existing IT infrastructures and technologies in use so as to establish smooth and coordinated operational processes.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <ParallaxComponent/>
    </div>
  );
};
