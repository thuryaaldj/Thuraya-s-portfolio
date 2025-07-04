import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">My Portfolio</h1>

        {/* Desktop Links */}
        <ul className="navbar-links hidden md:flex">
          <li className="navbar-link-item">
            <a href="#hero">About</a>
          </li>
          <li className="navbar-link-item">
            <a href="#whatido">What I Do</a>
          </li>
          <li className="navbar-link-item">
            <a href="#projects">My Projects</a>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-2xl cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="mobile-menu md:hidden">
          <ul className="flex flex-col gap-6 text-center mt-4">
            <li className="navbar-link-item" onClick={() => setIsOpen(false)}>
              <a href="#hero">About</a>
            </li>
            <li className="navbar-link-item" onClick={() => setIsOpen(false)}>
              <a href="#whatido">What I Do</a>
            </li>
            <li className="navbar-link-item" onClick={() => setIsOpen(false)}>
              <a href="#projects">My Projects</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
