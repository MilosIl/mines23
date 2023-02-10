import { useState } from "react";
import { Link } from "react-scroll";
import useShowButton from "../Hooks/useShowButton";

function Navbar() {
  const [isClick, setIsClick] = useState(false);
  const [nav, setNav] = useState(true);
  
  useShowButton();

  const handleClick = () => setIsClick(!isClick);

  const changeBackground = () => {
    if (window.scrollY >= 60) {
      setNav(false);
    } else {
      setNav(true);
    }
  }

  window.addEventListener("scroll", changeBackground);
  return (
    <header>
      <nav className={nav ? "nav change show" : "nav show"}>
        <div className="menu-icon" onClick={handleClick}>
          {isClick ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="svg-icon"
            >
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
              stroke="currentColor"
              className="svg-icon"
            >
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
            spy={true}
            smooth={true}
            offset={-60}
            duration={500}
            onClick={handleClick}
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-30}
            duration={1000}
            onClick={handleClick}
          >
            Projects
          </Link>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-30}
            duration={1000}
            onClick={handleClick}
          >
            About
          </Link>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-30}
            duration={1000}
            onClick={handleClick}
          >
            Contact
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
