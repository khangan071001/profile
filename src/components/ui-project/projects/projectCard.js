import React from "react";
import { Col, Nav } from "react-bootstrap";


export default function ProjectCard({ title, description, imgUrl }) {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="loi" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br/>
          <Nav.Link><button className="btn-view">view project</button></Nav.Link>           
        </div>
      </div>
    </Col>
  );
}
