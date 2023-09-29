import React, { useEffect } from 'react';
import Splide from '@splidejs/splide';
import "./about-client-slider.css"
import "../../../App.css"
const SplideSlider = () => {

  const client_data = [
    {
      client_img: "/assets/clients-img/client-one.jpg",
      name: "Hashim Ghaffar",
      position: "CEO, HHG Cotton Yarns",
      client_comment: "I am very satisfied. This was a difficult project and they were easy to work with and seemed like they really wanted to make this work better.",
    }, {
      client_img: "/assets/clients-img/client-two.jpg",
      name: "Kashif",
      position: "Cheif Operation, VPS with us",
      client_comment: "Awesome to work with. Incredibly organized, easy to communicate with, responsive with next iterations, and beautiful work.",
    }, {
      client_img: "/assets/clients-img/client-three.jfif",
      name: "Hashim Ghaffar",
      position: "CEO, HHG Cotton Yarns",
      client_comment: "I am very satisfied. This was a difficult project and they were easy to work with and seemed like they really wanted to make this work better.",
    },
  ]

  useEffect(() => {
    const splide = new Splide('.splide', {
      type: 'loop',
      autoplay: true,
      interval: 3000,
    });

    splide.mount();

    return () => {
      splide.destroy();
    };
  }, []);

  return (
    <div className='main-aboutus-container'>
      <div className='Client-comment-section'>
        <h1 class=" about-heading-title heading-all-component-font-style">Our Customers Say</h1>
      </div>
      <div className="splide">
        <div className="splide__track">
          <ul className="splide__list next_page_view">
            {
              client_data.map((item) => (

                <li className="splide__slide newslider">
                  <div className='slider-client-comments'>
                    <div className='author-detail-with-img'>
                      <div className='client-img-comment-div'>
                        <img className='CLIENT-IMG-COMMENTS'
                         src={item.client_img} 
                         alt='the client-IMG' 
                         loading="lazy"
                         />
                      </div>
                      <div className='client-author-name-and-ceo'>
                        <h2 className='auther-name heading-all-component-font-style'>
                          {item.name}
                        </h2>
                        <h2 className='author-position heading-all-component-font-style'>
                          {item.position}
                        </h2>
                      </div>
                    </div>
                    <div>

                      <p className='author-comment paragrapg-all-component-font-family'> {item.client_comment} </p>
                    </div>
                  </div>


                </li>
              ))
            }

          </ul>
        </div>
      </div>
    </div>
  );
};

export default SplideSlider;
