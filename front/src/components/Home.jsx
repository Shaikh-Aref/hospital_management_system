import React, { useState } from 'react';
import { Button, Container, Row, Col, Form, Carousel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Home.css'; // Import custom CSS for Home
import doctorNearMeImage from './111.jpg'; // Adjust the path to your images
import knowYourDoctorImage from './222.jpg';
import bookConfirmedAppointmentImage from './333.jpeg';
import simplifiesSchedulingImage from './444.jpg';
import powerfulPersonalOrganizeImage from './555.jpeg';
import qmmTokenImage from './666.png';
import { REACT_APPOINTMENT_ROUTE } from '../Constants/constants';

export function Home() {
  const navigate = useNavigate();
  const [city, setCity] = useState('');
  const [specialization, setSpecialization] = useState('');



  const handleBookAppointment = () => {
    navigate(REACT_APPOINTMENT_ROUTE);
  };

  return (
    <div>
      <div className="blue-section py-4">
        <Container style={{ marginBottom: '10px' }}>
          <h2 className="text-center text-white mb-4">BOOK N MEET A DOCTOR!</h2>
          <p className="text-center text-white mb-4">India's best online appointment scheduling platform</p>
          <Row className="justify-content-center">
             <div className="d-flex justify-content-center mt-4">
          <Button variant="primary" size="lg" onClick={handleBookAppointment}>Book Appointment</Button>
        </div>
          </Row>
        </Container>
      </div>
      <Container fluid>
      <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src="https://community.thriveglobal.com/wp-content/uploads/2019/08/doctor-patient.jpg" alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src="https://www.elationhealth.com/wp-content/uploads/2019/07/improving-doctor-patient-relationships-independent-primary-care-physician-header.jpeg" alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src="https://www.aamc.org/sites/default/files/styles/scale_and_crop_1200_x_666/public/d/1/3-hospitalist_patient-story.jpg__992x558_q85_crop-smart_subsampling-2_upscale.jpg?itok=HL_cR-BT" alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src="https://www.rotageek.com/hubfs/Happy%20doctors%20happy%20patients%20-%20hero%20header.jpg" alt="Forth slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src="https://tse1.mm.bing.net/th?id=OIP.ClY2jwM7zMyqGZFLIyUSWgHaE7&pid=Api&P=0&h=220" alt="Fifth slide" />
          </Carousel.Item>
        </Carousel>
        <div className="cards-section mt-4">
          <Row>
            <Col md={4}>
              <div className="card custom-card">
                <img src={doctorNearMeImage} className="card-img-top" alt="Doctor Near Me" />
                <div className="card-body">
                  <h5 className="card-title">DOCTOR NEAR ME</h5>
                  <p className="card-text">
                    Doctor / Hospital / Specialization to match specific consultation needs. Confirmed Online Appointment slots, practice locations, to select from to book appointment for clinic consultation or video consultation.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="card custom-card">
                <img src={knowYourDoctorImage} className="card-img-top" alt="Know Your Doctor" />
                <div className="card-body">
                  <h5 className="card-title">KNOW YOUR DOCTOR</h5>
                  <p className="card-text">
                    Request appointments based on slots, date, consultation location. Know your Doctor to book confirmed doctor Appointment effortlessly with clinic details of practice location to engage with patients effortlessly.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="card custom-card">
                <img src={bookConfirmedAppointmentImage} className="card-img-top" alt="Book Confirmed Appointment" />
                <div className="card-body">
                  <h5 className="card-title">BOOK CONFIRMED APPOINTMENT</h5>
                  <p className="card-text">
                    Avoid endless back and forth communication; empowering with Google verified SMS & dynamic Email notifications. Confirmed Doctor Appointment, clinical procedure scheduling, schedule next consultation with token.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="why-choose-section mt-5">
          <h3 className="text-center">WHY CHOOSE BOOKNMEET</h3>
          <p className="text-center">Online Appointment, Phone-in Appointment, Walk-in Appointment with Token</p>
          <Row>
            <Col md={4}>
              <div className="card custom-card">
                <img src={simplifiesSchedulingImage} className="card-img-top" alt="Simplifies Scheduling" />
                <div className="card-body">
                  <h5 className="card-title">SIMPLIFIES SCHEDULING</h5>
                  <p className="card-text">
                    With Y2A, scheduling occurs in one well-organized platform so the endless back and forth communication can be avoided and a streamlined communication is guaranteed. Manage multiple locations or employees, only show your clients the calendar you want them to see, and block out any dates you will be taking off from work. Manage Clinic effortlessly with our powerful interface for phone-in, walk-in, and online requests.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="card custom-card">
                <img src={powerfulPersonalOrganizeImage} className="card-img-top" alt="Powerful Personal Organize" />
                <div className="card-body">
                  <h5 className="card-title">POWERFUL. PERSONAL. ORGANIZE</h5>
                  <p className="card-text">
                    Y2A offers a wide selection of online solutions that simplify the process of scheduling appointments (clinic and eConsultation) that doesn't require registration. Send automatic and manual reminders, see who is missing at first sight. No switching between calendar and BOOKNMEET. Avoid booking conflicts. Automatically sync appointments and procedure scheduling on our powerful interface access on mobile.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="card custom-card">
                <img src={qmmTokenImage} className="card-img-top" alt="QMM Token" />
                <div className="card-body">
                  <h5 className="card-title">Y2A QMM-TOKEN</h5>
                  <p className="card-text">
                    Improve outpatient (OP) flow at Hospitals & clinics with Y2A's QMM (Queue Management Module). Seamless queue management that works with online appointments, clinic phone-in appointments & walk-in appointments. SMS notification and reminder to maintain the patient flow in consultation with Unique Token ID. Intimating patients by SMS and email reminders to avoid missing booked confirmed appointments effortlessly.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
