import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./navbar.css";
import logonav from "../../../assets/img/logo.jpg";
import icon1 from "../../../assets/img/icon-nav-1.png";
import icon2 from "../../../assets/img/icon-nav-2.png";
import icon3 from "../../../assets/img/icon-nav-3.png";

export default function Navbarr() {
  const [activeLink, setActiveLink] = useState("home");
  const [scolled, setScolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScolled(true);
      } else {
        setScolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };
  return (
    <Navbar expand="lg" className={scolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logonav} alt="" className="logo-navbar" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#project"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a>
                <img src={icon1} alt="" />
              </a>
              <a>
                <img src={icon2} alt="" />
              </a>
              <a>
                <img src={icon3} alt="" />
              </a>
            </div>
            <button className="vvd" onClick={() => console.log("connect")}>
                <span>Let's go</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
