
// import React, { useEffect } from "react";
// import { Splide } from "@splidejs/splide";
// import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
// import "./client-logo.css";
// import"../../../../App.css";
// const ClientLogos = () => {
//   const ClientLogo = [
//     {
//       path: process.env.PUBLIC_URL + '/assets/OMC-picture/client-logo1.png',
//     },
//     {
//       path: process.env.PUBLIC_URL + '/assets/OMC-picture/client-logo2.png',
//     },{
//       path: process.env.PUBLIC_URL + '/assets/OMC-picture/client-logo3.png',
//     },{
//       path: process.env.PUBLIC_URL + '/assets/OMC-picture/client-logo4.png',
//     },{
//       path: process.env.PUBLIC_URL + '/assets/OMC-picture/client-logo5.png',
//     },{
//       path: process.env.PUBLIC_URL + '/assets/OMC-picture/client-logo6.png',
//     },{
//       path: process.env.PUBLIC_URL + '/assets/OMC-picture/client-logo7.png',
//     },{
//       path: process.env.PUBLIC_URL + '/assets/OMC-picture/client-logo8.png',
//     }, {
//       path: process.env.PUBLIC_URL + '/assets/OMC-picture/client-logo9.png',
//     }, {
//       path: process.env.PUBLIC_URL + '/assets/OMC-picture/client-logo10.png',
//     }, {
//       path: process.env.PUBLIC_URL + '/assets/OMC-picture/client-logo11.png',
//     },{
//       path: process.env.PUBLIC_URL + '/assets/OMC-picture/client-logo12.png',
//     },{
//       path: process.env.PUBLIC_URL + '/assets/OMC-picture/client-logo13.png',
//     },{
//       path: process.env.PUBLIC_URL + '/assets/OMC-picture/client-logo14.png',
//     },{
//       path: process.env.PUBLIC_URL + '/assets/OMC-picture/client-logo15.png',
//     },{
//       path: process.env.PUBLIC_URL + '/assets/OMC-picture/client-logo16.png',
//     }
//   ];

//   useEffect(() => {
//     const splide = new Splide(".splidenew", {
//       type: "loop",
//       drag: "free",
//       focus: "center",
//       perPage: 3,
//       autoScroll: {
//         interval: 2000,
//         speed: 1,
//       },
//     });

//     splide.mount({ AutoScroll });

//     return () => {
//       splide.destroy();
//     };
//   }, []);

//   return (
// <div className="Client-logo-container">
//       <div className="client-name-that trust us">
//         <div className="brand-client">
//           <h2 className="heading-client-brand heading-all-component-font-style">Brands that</h2>
//           <h2 className="client-heading-trust trust-us heading-all-component-font-style">trust us</h2>
//         </div>
//       </div>

//       <div className="splide splidenew">
//         <div className="splide__track">
//           <div className="bg-linear-g-brands"></div>
//           <ul className="splide__list">
//             {ClientLogo.map((item, index) => (
//               <li className="splide__slide" key={index}>
//                 <div className="client-logo-owl">
//                   <img
//                     className="owl-slider-client-log"
//                     src={item.path}
//                     alt="client-logo"
//                     width="200"
//                     height="200"
//                   />
//                 </div>
//               </li>
//             ))}
//           </ul>
//           <div className="bg-linear-g-brands"></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ClientLogos;
