import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaLinkedin, FaYoutube, FaInstagram, FaTwitter, FaFacebook, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.css'; // Import custom CSS for Footer

export function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col md={3}>
            <h4>USEFUL LINKS</h4>
            <div className="useful-links">
              <a href="#about-us">About Us</a>
              <a href="#career">Career</a>
              <a href="#news-media">News & Media</a>
              <a href="#blogs">Blogs</a>
              <a href="#contact-us">Contact Us</a>
            </div>
          </Col>
          <Col md={3}>
            <h4>MULTISPECIALITY</h4>
            <div className="useful-links">
              <a href="#departments">Departments</a>
              <a href="#specialists">Specialists</a>
              <a href="#facilities">Facilities</a>
              <a href="#treatment">Treatment</a>
              <a href="#disease">Disease</a>
            </div>
          </Col>
          <Col md={3}>
            <h4>CONTACT US</h4>
            <div className="address">
              <div>
                <FaMapMarkerAlt size={20} />
                <span>392, Khasra No. 10/3, Village Parsodi,
                   Wardha Road, Nagpur Rural, 
                   Nagpur - 441108</span>
              </div>
              <div>
                <FaPhone size={20} />
                <span>+91-9876-543-210</span>
                <p>(For Appointment)</p>
              </div>
              <div>
                <FaEnvelope size={20} />
                <span>  y2a@gmail.com</span>
              </div>
            </div>
          </Col>
          <Col md={3}>
            <h4>FOLLOW US</h4>
            <div className="social-icons">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin size={24} /></a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube size={24} /></a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram size={24} /></a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter size={24} /></a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook size={24} /></a>
            </div>
          </Col>
        </Row>
        <hr/>
        <Row className="footer-bottom">
          <Col md={6} className="text-left">
            ©️ 2024 Y2A. All Rights Reserved
          </Col>
          <Col md={6} className="text-right">
            <a href="#privacy-policy">Privacy Policy</a> | 
            <a href="#compliance">Compliance</a> | 
            <a href="#administration-policies">Administration Policies</a> | 
            <a href="#patient-policies">Patient Policies</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;