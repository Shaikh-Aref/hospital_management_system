

// DoctorList.js

import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import {Modal, Table, Toast, ToastContainer } from "react-bootstrap";
import { getAllDoctors, removeDoctor } from "../Services/AdminService";
import { Link } from 'react-router-dom';

const DoctorList = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login'); // Redirect to login page
  };
  const [doctors, setDoctors] = useState([]);
    const [selectedDoctorId, setSelectedDoctorId] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [showToast, setShowToast] = useState(false);
    useEffect(()=>{
        getAllDoctorsList();
    },[])

    const getAllDoctorsList = async () => {
        const response = await getAllDoctors();
        setDoctors(response.data);
    }
    const closeModal = () => {
        setShowModal(false);
    }

    const handleYesClick = async () => {
        const response = await removeDoctor(selectedDoctorId);
        if (response.status === 200) {
            setShowModal(false);
            setShowToast(true);
            getAllDoctorsList();
        }
    }

    const handleCloseToast = () => {
        setShowToast(false);
    }

  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#">MyApp</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/doctor-list">All Doctors</Nav.Link>
              <Nav.Link as={Link} to="/add-doctor">Add Doctor</Nav.Link>
              <Nav.Link as={Link} to="/pending-status">New Appointment</Nav.Link>
              <Nav.Link as={Link} to="/all-appointment">All Appointments</Nav.Link>
            </Nav>
            <Button variant="outline-light" onClick={handleLogout}>Logout</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        {/* Add your doctor list content here */}
        <Container>
    <Container className="mt-4">
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Doctor Name</th>
            <th>Location</th>
            <th>Speciality</th>
            <th>Email</th>
            <th>Contact Number</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((d) => {
            return (
              <tr>
                <td>{d.d_id}</td>
                <td>{d.Doctor_Name}</td>
                <td>{d.Location}</td>
                <td>{d.Speciality}</td>
                <td>{d.Doctor_email}</td>
                <td>{d.Doctor_Contact_Number}</td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => {
                      setShowModal(true);
                      setSelectedDoctorId(d.d_id);
                    }}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
        <Modal show={showModal} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to remove {selectedDoctorId}?</Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={handleYesClick}>
                        Yes
                    </Button>
                    <Button variant="danger" onClick={closeModal}>
                        No
                    </Button>
                </Modal.Footer>
            </Modal> 
            <ToastContainer position="top-end">
                <Toast bg="light" onClose={handleCloseToast} show={showToast} delay={3000} autohide>
                    <Toast.Header>
                        <strong className="me-auto">Confirmation</strong>
                    </Toast.Header>
                    <Toast.Body>Doctor Removed</Toast.Body>
                </Toast>
            </ToastContainer>
    </Container>
      </Container>
    </div>
  );
};

export default DoctorList;
