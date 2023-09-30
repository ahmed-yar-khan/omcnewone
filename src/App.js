// import './App.css';
// import Navbar from './component/header/header';
// import { Footer } from './component/footer/footer';
// import { Home } from './component/Pages/Home page/home';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Contact from './component/contact form/contact';
// import About from './component/Pages/About/about';
// import { MobileApplication } from './component/Pages/our services/mobile application development/mobileApplication';
// import { SearchEngine } from './component/Pages/our services/search engine optimization/seo/seomain';
// import { SystemIntegration } from './component/Pages/our services/system integration/si.js/systemIntegration';
// import { WebDesgin } from './component/Pages/our services/website-development/website';
// import { DigitalSolution } from './component/Pages/our services/digital-marketing new/digital-soloution';
// import NotFound from './component/404-page-not-found/404';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// function App() {
//   return (
//     <>
//       <BrowserRouter >
//         <Navbar />

//         <Routes>
//           <Route exact path="/" element={<Home />} />
//           <Route path="/contact-us" element={<Contact />} />
//           <Route path="/About-us" element={<About />} />
//           <Route path="/digital-soloution" element={<DigitalSolution />} />
//           <Route path="/mobile-application-development" element={<MobileApplication />} />
//           <Route path="/search-engine-optimization" element={<SearchEngine />} />
//           <Route path="/system-integration" element={<SystemIntegration />} />
//           <Route path="/website-design-and-development" element={<WebDesgin />} />

//           <Route path="*" element={<NotFound />} />

//         </Routes>

//         <Footer />
//       </BrowserRouter>
//       <ToastContainer />
//     </>

//   );
// }

// export default App;





import React from 'react';
import './App.css';
import Navbar from './component/header/header';
import { Footer } from './component/footer/footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './component/contact form/contact';
import About from './component/Pages/About/about';
import NotFound from './component/404-page-not-found/404';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = React.lazy(() => import('./component/Pages/Home page/home'));
const DigitalSolution = React.lazy(() => import('./component/Pages/our services/digital-marketing new/digital-soloution'));
const MobileApplication = React.lazy(() => import('./component/Pages/our services/mobile application development/mobileApplication.js'));
const SearchEngine = React.lazy(() => import('./component/Pages/our services/search engine optimization/seo/seomain'));
const SystemIntegration = React.lazy(() => import('./component/Pages/our services/system integration/si.js/systemIntegration.js'));
const WebDesgin = React.lazy(() => import('./component/Pages/our services/website-development/website.js'));

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<React.Suspense fallback={<div>Loading...</div>}><Home/></React.Suspense>} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/About-us" element={<About />} />
          <Route path="/digital-soloution" element={<React.Suspense fallback={<div>Loading...</div>}><DigitalSolution /></React.Suspense>} />
          <Route path="/mobile-application-development" element={<React.Suspense fallback={<div>Loading...</div>}><MobileApplication /></React.Suspense>} />
          <Route path="/search-engine-optimization" element={<React.Suspense fallback={<div>Loading...</div>}><SearchEngine /></React.Suspense>} />
          <Route path="/system-integration" element={<React.Suspense fallback={<div>Loading...</div>}><SystemIntegration /></React.Suspense>} />
          <Route path="/website-design-and-development" element={<React.Suspense fallback={<div>Loading...</div>}><WebDesgin /></React.Suspense>} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
