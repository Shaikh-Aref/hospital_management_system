// src/components/Doctor.js
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Modal, Form } from "react-bootstrap";
import { fetchAllDoctors } from "../Services/UserServices";
import { useNavigate } from "react-router-dom";
 
function Doctor() {
  const navigate = useNavigate();
  const [doctors, setDoctors] = useState([]);
  const getAllDoctors = async () => {
    try {
      const response = await fetchAllDoctors();
      setDoctors(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(()=>{
    getAllDoctors();
  },[])
  const gotoAppointment = ()=>{
    navigate('/registraion-Appointment');
  }
  return (
    <Container>
      <Row className="mt-4">
        {doctors.map((doctor) => {
          return (
           <Col md={4} className="mb-3">
              <div className="card">
                <img
                  src= "https://www.freepnglogos.com/uploads/doctor-png/doctor-caricature-cartoon-image-pixabay-38.png"
                  className="card-img-top"
                  alt={`${doctor.Doctor_Name}`}
                />
                <div className="card-body">
                  <h5 className="card-title">{doctor.Doctor_Name}</h5>
                  <p className="card-text">
                    <strong>Location:</strong> {doctor.Location}
                    <br />
                    <strong>Specialty:</strong> {doctor.Speciality}
                    <br />
                    <strong>Contact No. :</strong>{" "}
                    {doctor.Doctor_Contact_Number}
                  </p>
                  <Button variant="primary" onClick={gotoAppointment}>
                    Book Appointment
                  </Button>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default Doctor;
// onClick={() => onSelect(doctor)}