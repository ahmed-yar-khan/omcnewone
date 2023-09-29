import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./header.css";

import "../../App.css"
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {

      const scrollPosition = window.scrollY;
      const scrollThreshold = 95;


      setIsScrolled(scrollPosition > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>

      <div className="navbar-container">
        <div className={`navbar-logo ${isMenuOpen ? "active" : ""}`}>
          <Link to="/">
            <img className="logo-img"
             src={process.env.PUBLIC_URL + "/assets/OMC-picture/omc-logo.png"} 
             alt="logo" 
             loading="lazy"
             />
          </Link>
        </div>
        <div className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
          <Link className="navlink-header" to="/">Home</Link>
          <Link className="navlink-header drop" to="/about-us">About Us</Link>



          <div className="dropdown">
            <div className="dropdown-btn">
              <span>Our Services</span>
              <span className="arrow"></span>
            </div>
            <ul className="dropdown-content" role="menu">
              <li style={{ '--delay': 1 }}><Link to="/digital-soloution">Digital Solution</Link></li>
              <li style={{ '--delay': 2 }}><Link to="/mobile-application-development">Mobile Application Development</Link></li>
              <li style={{ '--delay': 3 }}><Link to="/search-engine-optimization">Search Engine Optimization</Link></li>
              <li style={{ '--delay': 4 }}><Link to="/system-integration">System Integration</Link></li>
              <li style={{ '--delay': 5 }}><Link to="/website-design-and-development">Website Solution</Link></li>



            </ul>
          </div>


          <Link className="navlink-header" to="/contact-us">Contact Us</Link>
        </div>
        <div className="container-number-serchbar">
          <div className="number-nav ">
          <i className="fas fa-phone"></i> (021) 341 20043
          </div>
          
            
      
          <form className=" search-bar-hidden flex items-center">
            <label htmlFor="simple-search" className="sr-only">
              Search
            </label>
            <div className="relative w-full">

              <input
                type="text"
                id="simple-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search...."
                required=""
              />
            </div>
            <button
              type="submit"
              className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </form>

        </div>


        <div className={`hamburger-menu ${isMenuOpen ? "active" : ""}`} onClick={handleMenuToggle}>
          <div className={`bar ${isMenuOpen ? "active" : ""}`} />
          <div className={`bar ${isMenuOpen ? "active" : ""}`} />
          <div className={`bar ${isMenuOpen ? "active" : ""}`} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;