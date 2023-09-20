import './home.css';
import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import"../../../App.css"
import React, { useEffect} from 'react';

const cardsData = [
    { title: 'SEO and ASO', content: 'On-Page SEO', content1: 'Off-Page SEO',content3: 'Local SEO',content4: 'Keyword Research for ASO' },
    { title: 'Social Media', content: 'Creativity & Strategy ', content1: '360 Digital Campaigns', content2: 'Community Management' },
    { title: 'Content Lab', content: 'SEO', content1: 'UX', content2: 'Media Contents' },
    { title: 'Design', content: 'Branding', content1: 'Digital Production', content2: 'Production Outsourcing', content3: 'Services' },
    { title: 'Software Development', content: 'Ecommerce', content1: 'Mobile Apps', content2: 'Website & Landing pages', content3: 'CMS', content4: 'QA testing', content5: 'Devops' },
    { title: 'Data', content: 'Data Science', content1: 'Social Listening', content2: 'Power BI' },
];

const CardGridSlider = () => {
    useEffect(() => {
        const splide = new Splide('.splidenew', {
            type: 'loop',
            drag: 'free',
            focus: 'center',
            perPage: 3,
            autoScroll: {
                interval: 2000,
                speed: 1,
            },
        });

        splide.mount({ AutoScroll });

        return () => {
            splide.destroy();
        };
    }, []);


    
    return (
        <div className="six-card-home card-grid">
            <div className="splide splidenew">
                <div className="splide__track">
                    <ul className="splide__list">
                        {cardsData.map((card, index) => (
                            <li className="splide__slide responsive-card-margin" key={index}>
                                <div key={index} className="sir-card-home card">
                                    <h3 className='heading-card-title heading-all-component-font-style'>{card.title}</h3>
                                    <p className='para-card-content paragrapg-all-component-font-family'>{card.content}</p>
                                    <p className='para-card-content paragrapg-all-component-font-family'>{card.content1}</p>
                                    <p className='para-card-content paragrapg-all-component-font-family'>{card.content2}</p>
                                    <p className='para-card-content paragrapg-all-component-font-family'>{card.content3}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default CardGridSlider;
