import React from 'react'
import { useState } from 'react'
import { Col, Container,Form,Row } from 'react-bootstrap'
import "./contact.css"
import anhfphi from "../../../assets/img/anhphi.jpg"
export default function Contact() {
  const formInnitialDetails ={
    firstName: '',
    lastName: '',
    email:'',
    phone: '',
    messager:'',
  }
  const [formDetails, setFormDetails] = useState(formInnitialDetails)
  const [buttonText, setButtonText] = useState('send');
  const [status, setStatus] = useState([]);
  const onFormUpdate = (category, value) =>{
    setFormDetails({
      ...formDetails,
      [category]: value
    })
  }

  const handleSubmit = () =>{

  }
  return (
    <section className='contact' id="contact">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={anhfphi} alt='contact'/>
          </Col>
          <Col md={6}>
            <h2>
              Get Feedback
            </h2>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col sm={6} className="px-1">
                  <input type="text" placeholder="first name" />
                </Col>
                <Col sm={6} className="px-1">
                  <input type="text" placeholder="last name" />
                </Col>
                <Col sm={6} className="px-1">
                  <input type="email" placeholder="email address" />
                </Col>
                <Col sm={6} className="px-1">
                  <input type="tel" placeholder="phone number"/>
                </Col>
                <Col className='px-1'>
                  <textarea type="text" row="6" value={formDetails.messager} placeholder="input Message" onChange={(e) => onFormUpdate('messager', e.target.value)} />
                  <button type='submit'> <span>{buttonText}</span></button>
                </Col>
                {
                  status.messager && <Col>
                    <p className={status.success === false ? "danger" : "success"}>{status.messager}</p>
                  </Col>
                }
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
