import React from "react";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import "./project.css";
import "./projectCard.js";
import ProjectCard from "./projectCard.js";
import anhproj1 from "../../../assets/img/img-project-1.png";
import anhproj2 from "../../../assets/img/img-project-2.png";
import anhproj3 from "../../../assets/img/img-project-3.png";

export default function Project() {
  const projects = [
    {
      title: "web-store-API",
      description: "personal project",
      imgUrl: anhproj1,
    },
    {
      title: "web-store-API",
      description: "personal project",
      imgUrl: anhproj2,
    },
    {
      title: "web-store-API",
      description: "personal project",
      imgUrl: anhproj3,
    },
  ];
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>List personal projects</p>
            <Tab.Container id="projects-tabs" defaultActiveKey={"first"}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
