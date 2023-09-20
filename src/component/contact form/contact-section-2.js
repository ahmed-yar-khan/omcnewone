import { Link } from "react-router-dom";
import"../../App.css"
// import { Parallax } from "react-parallax";
export const ContactSection2 = () => {
    const contactDetail = [
        {
            icon: "s",
            detail: "Karachi, Pakistan",
            address: "Plot No. HC/33 Bahadrabad Charminar Chowrangi",
        },
        {
            icon: "s",
            detail: "(021) 341 20043",
        },
        {
            icon: "s",
            detail: "info@onlinemediacircle.com",
        }
    ];

    return <>
        <section className="kc-elm kc-css-546894 kc_row">
            <div className="kc-row-container  kc-container">
                <div className="kc-wrap-columns">
                    <div className="kc-elm kc-css-243632 kc_col-sm-5 kc_column col-md-5 col-sm-12">
                        <div className="kc-col-container"><div className="kc-elm kc-css-13966 crumina-module contacts-item">
                            <div className="icon">
                                <img className="img-contact-us-section-2" src="/assets/icon/istockphoto-1347332330-612x612-removebg-preview (1).png" alt="icon" />

                            </div>
                            <div className="content">
                                <a href="#" target="_self" title="" className="h5 title">Karachi, Pakistan</a>
                                <div className="sub-title">Plot No. HC/33 Bahadrabad Charminar Chowrangi</div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="kc-elm kc-css-216184 kc_col-sm-4 kc_column col-md-4 col-sm-12">
                        <div className="kc-col-container">
                            <div className="kc-elm kc-css-278094 crumina-module contacts-item">
                                <div className="icon">
                                    <img className="img-contact-us-section-2" src="https://onlinemediacircle.com/wp-content/uploads/2016/11/message.svg" alt="icon" />
                                </div>
                                <div className="content">

                                    <a href="#" target="_self" title="" className="h5 title">info@onlinemediacircle.com</a>
                                    <div className="sub-title">online support</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="kc-elm kc-css-981000 kc_col-sm-3 kc_column col-md-3 col-sm-6 col-xs-12">
                        <div className="kc-col-container"><div className="kc-elm kc-css-392276 crumina-module contacts-item">
                            <div className="icon">
                                <img className="img-contact-us-section-2" src="https://onlinemediacircle.com/wp-content/uploads/2016/11/1456266303_contact-09.svg" alt="icon" />
                            </div>
                            <div className="content">
                                <Link href="#" target="_self" title="" className="h5 title">(021) 341 20043</Link>
                                <div className="sub-title">Mon-Sat 11am-8pm</div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}



{/* 
        <Parallax 
             bgImage="https://wallpapercrafter.com/sizes/1366x768/86976-dots-simple-background-abstract-hd-4k-dark-black-dribbble-oled.jpg"

         >
         <div className="contact-section-container ">

             <div className="contact-detail-container">
                 {contactDetail.map((details, index) => (
                     <>
                     <div className="">
                     <div className="logo-container" key={index}>
                         <img src={details.icon} alt="the logo" />
                     </div>
                     <div className="head-cont">
                         <h4 className="head-contactus">{details.detail}</h4>
                     </div>
                     <div className="head-cont-para">
                         <p className="head-contactus-para">{details.address}</p>
                     </div>
                     </div>
                     </>
                 ))}
             </div>
         </div>
         </Parallax>
         */}


