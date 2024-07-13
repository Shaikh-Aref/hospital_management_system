import { useEffect, useState } from "react";
import { Button, Container, Modal, Table, Toast, ToastContainer } from "react-bootstrap";
import { getAllDoctors, removeDoctor } from "../../Services/AdminServices";

export function DoctorTable() {
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
  );
}
