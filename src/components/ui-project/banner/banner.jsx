import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import headerimg from"../../../assets/img/header-img.svg"
import "./banner.css"
export default function Banner() {
  return (
    <div>
        <section className='banner' id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className='tagline'>
                            Wellcome to my project
                        </span>
                        <h1>
                            <span className='wrap'>
                                nguyễn văn khang an
                            </span>
                        </h1>
                        <p className='banner-p'>
                            Birth of date  
                            <i class="fa-solid fa-arrow-right banner-icon-right"></i>
                            <span> 07 - 10 - 2001</span> 
                        </p>
                        <p>
                            Phone 
                            <i class="fa-solid fa-arrow-right banner-icon-right"></i>
                            <span>0859250925</span>
                        </p>
                        
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerimg} alt=''/>
                    </Col>
                </Row>
            </Container>
        </section>
    </div>
  )
}
