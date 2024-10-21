import React, { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa"; // Correct icon imports
import { Link } from "react-scroll"; // For smooth scrolling

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu open/close state
  };

  const closeMenu = () => {
    setIsMenuOpen(false); // Close menu
  };

  const navItems = [
    {
      link: "Home",
      path: "hero",
    },
    {
      link: "About",
      path: "about",
    },
    {
      link: "Services",
      path: "services",
    },
    {
      link: "Portfolio",
      path: "portfolio",
    },
    {
      link: "Working",
      path: "working",
    },
    {
      link: "Testimonial",
      path: "testimonial",
    },
    {
      link: "Contact",
      path: "contact",
    },
  ];

  return (
    <nav
      id="header"
      className="w-full flex bg-white justify-between items-center gap-1 lg:px-16 px-6 py-4 sticky top-0 z-50"
    >
      {/* Logo */}
      <h1 className="text-black md:text-4xl text-3xl font-bold font-rubik">
        Solid <span className="text-yellow-500 italic">Foundation</span>
      </h1>

      {/* Desktop Menu */}
      <ul className="lg:flex justify-center gap-6 hidden">
        {navItems.map(({ link, path }) => (
          <Link
            key={path}
            to={path}
            className="text-black uppercase font-bold cursor-pointer p-3 rounded-full hover:bg-yellow-500 hover:text-black text-[15px]"
            spy={true}
            offset={-100}
            smooth={true}
            duration={500} // Adjust scroll duration
            onClick={closeMenu}
          >
            {link}
          </Link>
        ))}
      </ul>

      {/* Mobile Toggle Button */}
      <div className="lg:hidden flex items-center">
        {isMenuOpen ? (
          <FaTimes className="text-2xl cursor-pointer" onClick={toggleMenu} />
        ) : (
          <FaBars className="text-2xl cursor-pointer" onClick={toggleMenu} />
        )}
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="lg:hidden absolute top-full left-0 w-full bg-white flex flex-col items-center gap-6 py-4 z-40 shadow-lg">
          {navItems.map(({ link, path }) => (
            <Link
              key={path}
              to={path}
              className="text-black uppercase font-bold cursor-pointer p-3 rounded-full hover:bg-yellow-500 hover:text-black text-[15px]"
              spy={true}
              offset={-100}
              smooth={true}
              duration={500} // Adjust scroll duration
              onClick={closeMenu}
            >
              {link}
            </Link>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Header;
