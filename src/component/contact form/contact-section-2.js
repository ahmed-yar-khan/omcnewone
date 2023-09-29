import { Link } from "react-router-dom";

import "../../App.css"
export const ContactSection2 = () => {

    return <>
        <section className="kc-elm kc-css-546894 kc_row">
            <div className="kc-row-container  kc-container">
                <div className="kc-wrap-columns">
                    <div className="kc-elm kc-css-243632 kc_col-sm-5 kc_column col-md-5 col-sm-12">
                        <div className="kc-col-container"><div className="kc-elm kc-css-13966 crumina-module contacts-item">
                            <div className="icon">
                                <img className="img-contact-us-section-2"
                                 src="/assets/icon/istockphoto-1347332330-612x612-removebg-preview (1).png"
                                  alt="icon"
                                  loading="lazy"
                                  />

                            </div>
                            <div className="content">
                                <Link to="#" target="_self" title="" className="h5 title">Karachi, Pakistan</Link>
                                <div className="sub-title">Plot No. HC/33 Bahadrabad Charminar Chowrangi</div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="kc-elm kc-css-216184 kc_col-sm-4 kc_column col-md-4 col-sm-12">
                        <div className="kc-col-container">
                            <div className="kc-elm kc-css-278094 crumina-module contacts-item">
                                <div className="icon">
                                    <img className="img-contact-us-section-2" 
                                    src="/assets/icon/Gmail_Logo_512px.png" 
                                    alt="icon" 
                                    loading="lazy"
                                    />
                                </div>
                                <div className="content">

                                    <Link to="#" target="_self" title="" className="h5 title">info@onlinemediacircle.com</Link>
                                    <div className="sub-title">online support</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="kc-elm kc-css-981000 kc_col-sm-3 kc_column col-md-3 col-sm-6 col-xs-12">
                        <div className="kc-col-container"><div className="kc-elm kc-css-392276 crumina-module contacts-item">
                            <div className="icon">
                                <img className="img-contact-us-section-2" 
                                src="/assets/icon/4-red-phone-png-image.png" 
                                alt="icon" 
                                loading="lazy"
                                />
                            </div>
                            <div className="content">
                                <Link to="#" target="_self" title="" className="h5 title">(021) 341 20043</Link>
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



