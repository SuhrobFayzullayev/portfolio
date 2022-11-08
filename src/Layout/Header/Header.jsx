import { useState } from "react";

// Libraries
import { Button, Nav, Navbar } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { Animated } from "react-animated-css";

// Styled Component
import { HeaderWrapper } from "./HeaderWrapper";

// Logo
import logo from "./../../images/sf-logo.jpg";

// data
const pages = ["Home", "About", "Skills", "Portfolio"];

function Header() {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <HeaderWrapper sticky="top" expand="md">
      <Animated
        className="px-3 header-container container"
        animationIn="fadeInDown"
      >
        {/* Bars Menu */}
        <Navbar.Brand
          onClick={() => navigate("")}
          className=" d-flex align-items-center justify-content-center"
          style={{ cursor: "pointer" }}
        >
          <img src={logo} style={{ width: "50px" }} />
          <h2
            className="logo-text mt-3 mx-0 text-danger "
            style={{ fontWeight: "400" }}
          >
            SuhrobDev
          </h2>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className={openMenu && "show"}
          onClick={() => setOpenMenu((prev) => !prev)}
        >
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Pages and Routes */}
          <Nav className="ms-auto link-wrapper">
            {pages.map((v, i) => (
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active nav-link" : "nav-link"
                }
                key={i + v}
                to={`${v == "Home" ? "" : v.toLocaleLowerCase()}`}
              >
                {v == "About" ? "About Me" : v}
              </NavLink>
            ))}
            <Button
              onClick={() => navigate(`lets-talk`)}
              className="lets-talk-btn"
            >
              Let's Talk
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Animated>
    </HeaderWrapper>
  );
}

export default Header;
