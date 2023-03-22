import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./footer.css";
import logo from "../../assets/img/logo.jpg";
import icon1 from "../../assets/img/icon-nav-1.png";
import icon2 from "../../assets/img/icon-nav-2.png";
import icon3 from "../../assets/img/icon-nav-3.png";
export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <Col sm={6}>
            <img src={logo} alt="img-logo" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
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
            <p>khangan071001221001@gmail.com  -   0859250925</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
