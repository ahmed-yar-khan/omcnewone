import { Link } from "react-router-dom"
import "./mobile-application.css"
import "../../../../App.css"
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ParallaxComponent from "../../../parrelxeffect omc/parrelxeffect";
export const MobileApplication = () => {


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


  return <>
    <section  >

      <div className="container-sectiion1">
        <div className="mobile-app">
          <img className="img-mobile-appli" src="/assets/backgroundimg/section-imgs/4631454-removebg-preview.png" alt="asd"/>
        </div>
        <motion.div

          ref={refwebsite1} // Attach the ref to the container
          initial="hidden"
          animate={inViewwebsite1 ? "visible" : "hidden"} // Animate when inView is true
          variants={itemVariants}
          transition={{ duration: 1, ease: "linear" }}
        >


          <div className="heading-mobile-app">
            <h2 className="title-mobile heading-all-component-font-style">Mobile Application Development</h2>
            <div className="para-containner">


              <p className="para-cntent-mobile-appp paragrapg-all-component-font-family">
                Our Industry Veterans choose the right development approach to deliver you the high-performance Mobile Application.
              </p>
              <p className="para-cntent-mobile-appp paragrapg-all-component-font-family">
                Create hyper-focused, innovative and robust apps for mobile devices that use modern standards to deliver an world-class experience to users.
              </p>
              <p className="para-cntent-mobile-appp paragrapg-all-component-font-family">
                Mobile Application with a delighted User Interface and scalability let you go mobile to meet the business where it happens.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="second-section">
        <h2 className="heading-mobile-title heading-all-component-font-style">We are Specialized in Mobile App Development Services</h2>
        <div className="backgroung-white-img-content">
          <motion.div

            ref={refwebsite2} // Attach the ref to the container
            initial="hidden"
            animate={inViewwebsite2 ? "visible" : "hidden"} // Animate when inView is true
            variants={itemVariants}
            transition={{ duration: 1, ease: "linear" }}
          >

            <div className="content-app-para-contianer">
              <p className="para-mobile-application paragrapg-all-component-font-family">Our experience is deeply rooted in building highly complex code meant for
                specific needs of the client. With years of expertise, our boundless lists
                of technology-as-a-Service driven solution keeps on evolving to maintain the
                pace with the World. Our ability of building highly-oriented Mobile apps puts
                us at a leading position for customized Application Development.
              </p>
              <div className="btn-mobil-application-contact-link">

                <Link to="/contact us" >
                  <button className="contact-link-mobile-application heading-all-component-font-style">Tell Us About Your Project</button>
                </Link>
              </div>
            </div>
          </motion.div>
          <img className="tec-img" src="/assets/backgroundimg/mob-techs.jpg" alt="" />
        </div>
      </div>



      <div className="new-section-main-mobilecontainer">
        <div className="mobile-container" >
          <div className="img-mobile-laptop">
            {/* <img className="img-mobile-lap" src="/assets/backgroundimg/devices-2x-dev.webp" alt="" /> */}
            <img className="img-mobile-lap" src="/assets/backgroundimg/features-mobile.png" alt="" />
          </div>
          <div className="mobile-application-content-container">
            <motion.div

              ref={refwebsite3} // Attach the ref to the container
              initial="hidden"
              animate={inViewwebsite3? "visible" : "hidden"} // Animate when inView is true
              variants={itemVariants}
              transition={{ duration: 1, ease: "linear" }}
            >

              <div className="content-application-container">
                <h2 className="promise-title heading-all-component-font-style">Our Promise</h2>
                <div>

                  <p className="para-content-mobile-application paragrapg-all-component-font-family">
                    Working closely with our Project Mangers,
                    our app developers can create mobile apps
                    for Android, iOS, and hybrid devices that
                    will fulfill your app development needs.
                    Our Project Managers are involved in this
                    process with you from beginning to end,
                    and they are deeply invested in the projects
                    we work on with you. We care about the apps
                    just as much as if they were our own. We’ll
                    make sure that the final product suits your
                    needs!
                  </p>
                </div>
                <div>
                  <p className="para-content-mobile-application paragrapg-all-component-font-family">
                    During the planning process, a Project Manager
                    will help you decide what features you want your
                    app to have. In this step, we’ll work closely with
                    you to ensure that our work helps your mobile app
                    meet its goals. Our promise is that you can rely
                    on us for the personal attention and customization
                    you need. We will help you with troubleshooting and
                    maintenance throughout the app development process
                    and will make sure it is perfect come time to submit
                    your app to the App Stores.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <ParallaxComponent/>
    </section>
  </>

}