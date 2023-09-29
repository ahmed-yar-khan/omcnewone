import React from 'react';
import './home.css';
import "../../../App.css"
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const cardsData = [
    { title: 'SEO and ASO', content: 'On-Page SEO', content1: 'Off-Page SEO',content2: 'Local SEO',content3: 'Keyword Research for ASO' },
    { title: 'Social Media', content: 'Creativity & Strategy ', content1: '360 Digital Campaigns', content2: 'Community Management' ,content3: 'Facebook Marketing'},
    { title: 'Content Lab', content: 'SEO', content1: 'UX', content2: 'Media Contents' , content3: 'Facebook Marketing'},
    { title: 'Design', content: 'Branding', content1: 'Digital Production', content2: 'Production Outsourcing', content3: 'Services' },
    { title: 'Software Development', content: 'Ecommerce', content1: 'Mobile Apps', content2: 'Website & Landing pages', content3: 'CMS', content4: 'QA testing', content5: 'Devops' },
    { title: 'Data', content: 'Data Science', content1: 'Social Listening', content2: 'Power BI',content3:"Data-driven Decision Making" },
];

const CardGrid = () => {
  const itemVariants = {
    hidden: { y: 200, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const [refcard, inViewcard] = useInView({
    triggerOnce: true, 
    threshold: 0.1, 
  });
    return (
            <motion.div

                ref={refcard} 
                initial="hidden"
                animate={inViewcard ? "visible" : "hidden"}
                variants={itemVariants}

            >
        <div className="six-card-home card-grid">
                {cardsData.map((card, index) => (
                    <div key={index} className="sir-card-home card">
                        <h3 className='heading-card-title heading-all-component-font-style'>{card.title}</h3>
                        <div className='disply-setting'>

                        <p className='para-card-content paragrapg-all-component-font-family'>{card.content}</p>
                        <p className='para-card-content paragrapg-all-component-font-family'>{card.content1}</p>
                        <p className='para-card-content paragrapg-all-component-font-family'>{card.content2}</p>
                        <p className='para-card-content paragrapg-all-component-font-family'>{card.content3}</p>
                        </div>
                    </div>
                ))}
        </div>
                </motion.div>
    );
};

export default CardGrid;
