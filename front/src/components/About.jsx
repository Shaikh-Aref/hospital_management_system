import React from 'react';
import { Alert, Col, Container, Row } from 'react-bootstrap';
import './About.css'; 
import visionImage from './Photos/th.jpeg';
import missionImage from './Photos/th1.png';
import additionalImage1 from './Photos/th5.jpeg';
import additionalImage2 from './Photos/th2.jpeg';
import additionalImage3 from './Photos/1.webp';

export function About() {
  return (
    <Container className="about-container">
      <Alert variant="success" className="about-title">About Us</Alert>
      <Row className="section-content">
      <Col md={8} className="section-text">
          <p>
            Welcome to Y2A, your premier destination for seamless healthcare management. Established with a mission to revolutionize the healthcare experience, Y2A offers a cutting-edge platform designed to simplify the way you book appointments, access personalized health information, and connect with healthcare professionals. Our commitment is to provide efficient, accessible, and high-quality healthcare services, ensuring that every patient receives the care they need promptly and effectively. At Y2A, we believe in empowering individuals to take control of their wellness journey, promoting healthier and happier lives through innovative technology and personalized support. Join us as we pave the way for a more connected and convenient healthcare future.
          </p>
        </Col>
        <Col md={4} className="mb-3">
          <img src={additionalImage1} alt="Additional 1" className="img-fluid section-image" />
        </Col>
      </Row>
      <Row className="section-content">
        <Col>
          <Alert variant="primary" className="section-title">Vision</Alert>
          <Row>
            <Col md={4} className="mb-3">
              <img src={additionalImage3} alt="Vision" className="img-fluid section-image" />
            </Col>
            <Col md={8} className="section-text">
              <p>
                Y2A aims to revolutionize healthcare management by offering a streamlined platform for booking appointments, accessing personalized health information, and connecting with healthcare providers. Our vision is to empower individuals to take control of their wellness journey with convenience, efficiency, and personalized support, ultimately promoting healthier, happier lives.
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="section-content">
        <Col>
          <Alert variant="danger" className="section-title">Mission</Alert>
          <Row>
            <Col md={8} className="section-text">
              <p>
                Y2A's mission is to deliver accessible and efficient healthcare services through innovative technology. We are committed to enhancing patient experiences by providing easy appointment scheduling, seamless communication with healthcare professionals, and personalized health insights. Our goal is to make quality healthcare more reachable and user-friendly for everyone.
              </p>
            </Col>
            <Col md={4} className="mb-3">
              <img src={missionImage} alt="Mission" className="img-fluid section-image" />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
