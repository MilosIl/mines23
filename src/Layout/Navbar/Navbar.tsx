import "./navbar.css";

import { useEffect, useState } from "react";
import { Link } from "react-scroll";
function Navbar() {
  const [isClick, setIsClick] = useState(false);
  const [nav, setNav] = useState(true);

  useEffect(() => {
    showButton;
  }, []);

  const showButton = () => {
    if (window.innerWidth <= 769) {
      setIsClick(false);
    } else {
      setIsClick(true);
    }
  };
  const handleClick = () => setIsClick(!isClick);
  const closeMobileMenu = () => setIsClick(false);
  const changeBackground = () => {
    if (window.scrollY >= 60) {
      setNav(false);
    } else {
      setNav(true);
    }
  };

  window.addEventListener("resize", showButton);
  window.addEventListener("scroll", changeBackground);

  return (
    <header>
      <nav className={nav ? "nav change show" : "nav show"}>
        <div className="logo">
          <img src="./logo-light.png" alt="mines-dev" />
        </div>
        <div className="menu-icon" onClick={handleClick}>
          {isClick ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </div>
        <ul className={isClick ? "nav-menu show" : "nav-menu"}>
          <Link
            activeClass="active"
            to="home"
            aria-label="home"
            spy={true}
            smooth={true}
            offset={-60}
            duration={500}
            onClick={closeMobileMenu}>
            Home
          </Link>
          <Link
            activeClass="active"
            to="projects"
            aria-label="projects"
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000}
            onClick={closeMobileMenu}>
            Projects
          </Link>
          <Link
            activeClass="active"
            to="about"
            aria-label="about"
            spy={true}
            smooth={true}
            offset={-60}
            duration={1000}
            onClick={closeMobileMenu}>
            About
          </Link>
          <Link
            activeClass="active"
            to="contact"
            aria-label="contact"
            spy={true}
            smooth={true}
            offset={-60}
            duration={1000}
            onClick={closeMobileMenu}>
            Contact
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
