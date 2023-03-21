import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./skills.css";
import anhtron from "../../assets/img/meter3.svg";
export default function Skills() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                ds ds fds fds f dsf ds fds f ds fsd f ds fds f sd fds f sdf ds f
                sdf sd fsd f sdf
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <div>
                    <img
                      src={anhtron}
                      alt="image_error"
                      className="img-back-black"
                    />
                    <h5 className="h5-absolute">JavaScript</h5>
                  </div>
                </div>
                <div className="item">
                  <div>
                    <img
                      src={anhtron}
                      alt="image_error"
                      className="img-back-black"
                    />
                    <h5 className="h5-absolute">HTML</h5>
                  </div>
                </div>
                <div className="item">
                  <div>
                    <img
                      src={anhtron}
                      alt="image_error"
                      className="img-back-black"
                    />
                    <h5 className="h5-absolute">CSS</h5>
                  </div>
                </div>
                <div className="item">
                  <div className="img-div">
                    <img
                      src={anhtron}
                      alt="image_error"
                      className="img-back-black"
                    />
                    <h5 className="h5-absolute">Reactjs</h5>
                  </div>
                </div>
                <div className="item">
                  <div className="img-div">
                    <img
                      src={anhtron}
                      alt="image_error"
                      className="img-back-black"
                    />
                    <h5 className="h5-absolute">Java</h5>
                  </div>
                </div>
                <div className="item">
                  <div className="img-div">
                    <img
                      src={anhtron}
                      alt="image_error"
                      className="img-back-black"
                    />
                    
                  </div><div className="h5-absolute">
                      <h5>Bootstrap</h5>
                    </div>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
