// src/components/DoctorNotAvailable.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export function DoctorNotAvailable(props) {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8} className="text-center">
          <h2>We're currently working to be in your city.</h2>
          <p>
            Once we are available at your desired location, we will notify you. Thank you for your patience!
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default DoctorNotAvailable;