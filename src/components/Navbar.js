import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import { useGlobalContext } from "../context";

const Navbar = () => {
  const { setContext } = useGlobalContext();

  const handleLinkClick = (newContext) => {
    setContext(newContext);
  };

  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/" onClick={() => handleLinkClick("Home")}>
          <img src={logo} alt="cocktailLogo" className="logo" />
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/" onClick={() => handleLinkClick("Home")}>
              Home
            </Link>
            <Link to="/about" onClick={() => handleLinkClick("About")}>
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
