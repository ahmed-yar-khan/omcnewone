import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { toast, Flip } from "react-toastify";
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ContactSection2 } from './contact-section-2';
import "./contact.css"
import "../../App.css"
const Contact = () => {

    useEffect(() => {
        const elements = document.querySelectorAll('.get-in-touch-para');

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    observer.unobserve(entry.target);
                }
            });
        });

        elements.forEach((element) => {
            observer.observe(element);
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    let form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_uhy07y7', 'template_w6nki6e', form.current, 'tJt0Bw0u9kJ_Gpql4')
            .then((result) => {
                console.log(result.text);
                console.log('mail sent');
            }, (error) => {
                console.log(error.text);
            });
        toast.success('your mail has been sent', {
            transition: Flip,
            autoClose: 1000,
            position: "top-right",
            theme: "dark"
        })
    };

    return (
        <>

            <section className="contact-us-main breadcrumb-option">
                <div className="contact-container">
                    <div className="contact-row row">
                        <div className="contact-col col-lg-12">
                            <div className="contact breadcrumb__text breadcrumb__text">
                                <h4 className='contact-us-top-section heading-all-component-font-style '>Contact Us</h4>
                                <div className="contact-breadcrumb__links breadcrumb__links">
                                    <Link className='style-link-contact-home' to="/" > Home   </Link>
                                    <div> {" > "} </div>
                                    <span className='style-contact-us heading-all-component-font-style'> Contact Us </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="get-in-touch-background">
                <div className="get-in-touch-para">
                    <div className='contact-heading-container'>
                        <h1 className='contact-head heading-all-component-font-style'>
                            Get in touch
                        </h1>
                    </div>
                    <div className='contact-para'>
                        <p className='contact-para-p'>
                            Want to max out growth and profitability and look great doing it? <br />
                            Then implement our consulted strategy developed around business goals and objectives.
                        </p>
                    </div>
                </div>

            </div>
            <ContactSection2 />
            <section className="contact-form spad">
                <div className="contact-form-container">
                    <div className="contact-form-row-row">
                        <div className="contact-form-col col-lg-6 col-md-6">
                            <div className=" contact-form-contact__text contact__text">

                                <div className="map">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14446.678532915253!2d67.05817319999999!3d24.892754750000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33d8fcf8bc5bb%3A0x53b50a7799bb6ac8!2sBahadurabad%20Charminar%20Chowrangi!5e0!3m2!1sen!2s!4v1685652503512!5m2!1sen!2s&markers=color:red%7C24.892754750000002,67.05817319999999"
                                        height={300}
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        aria-hidden="false"
                                        tabIndex={0}
                                        title='map'
                                    />

                                </div>
                            </div>
                        </div>
                        <div className="contact-form-col-lg-6 col-lg-6 col-md-6">

                            <header className="have-any-question-container">
                                <div className="title-text-wrap-heading">
                                    <h1 className=" heading-title-question heading-all-component-font-style">Have Any Questions?</h1>
                                </div>
                                <div className="heading-decoration">
                                    <div className="h5 heading-text">Please contact us using the form and we’ll get back to you as soon as possible.</div>
                                </div>
                            </header>

                            <div className="contact-form-main-contact contact__form">
                                <form ref={form} onSubmit={sendEmail}>

                                    <div className="contact-form-main-row">

                                        <div className='contact-text-container-para'>
                                            <div className='contact-'></div>
                                        </div>
                                        <div className='style-contact-form'>
                                            <div className="  col-lg-6">
                                                <input className=" contact-form-main-col" type="text" placeholder="*Name" name="user_name" required />
                                            </div>
                                            <div className="col-lg-6">
                                                <input className=" contact-form-main-col" type="Email" placeholder="*Email" name="user_email" required />
                                            </div>
                                        </div>


                                        <div className=" col-lg-6">
                                            <input className=" contact-form-main-col" type="number" placeholder="*Phone No" name="Phone_No" required />
                                        </div>
                                        <div className="col-lg-6">
                                            <input className=" contact-form-main-col " type="text" placeholder="*Company Name" name="Company_Name" required />
                                        </div>
                                        <div className=" col-lg-12">
                                            <textarea className=" contact-form-main-col contact-text-area" placeholder="*details" name="details" required />
                                            <div className='contact-button-style'>
                                                <button className="contact-btn" type="submit" value="Send">
                                                    Send Mail
                                                    <span></span><span></span><span></span><span></span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact;