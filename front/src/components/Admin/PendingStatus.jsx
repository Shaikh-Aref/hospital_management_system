import { useEffect, useState } from "react";
import { Button, Container, Modal, Table, Toast, ToastContainer } from "react-bootstrap";
import { changeUserStatus, getPendingUsers } from "../../Services/AdminServices";

export function PendingStatus() {
    const [users, setUsers] = useState([]);
    const [selectedId, setSelectedId] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [showToast, setShowToast] = useState(false);
    useEffect(()=>{
        getAllList();
    },[])

    const getAllList = async () => {
        const response = await getPendingUsers();
        setUsers(response.data);
    }
    const closeModal = () => {
        setShowModal(false);
    }
    const handleYesClick = async () => {
        console.log(selectedId);
        const response = await changeUserStatus(selectedId);
        if (response.status === 200) {
            setShowModal(false);
            setShowToast(true);
            getAllList();
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
            <th>Location</th>
            <th>Speciality</th>
            <th>Doctor Name</th>
            <th>Date</th>
            <th>Name</th>
            <th>Email</th>
            <th>Contact Number</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => {
            return (
              <tr>
                <td>{u.U_id}</td>
                <td>{u.Location}</td>
                <td>{u.Speciality}</td>
                <td>{u.Doctor_Name}</td>
                <td>{u.Appointment_Date}</td>
                <td>{u.Patient_Name}</td>
                <td>{u.email}</td>
                <td>{u.Contact_Number}</td>
                <td>
                  <Button
                    variant="primary"
                    onClick={() => {
                      setShowModal(true);
                      setSelectedId(u.U_id);
                    }}
                  >
                    Approve
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
                <Modal.Body>Are you sure you want to Approve {selectedId}?</Modal.Body>
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
                    <Toast.Body>Approved</Toast.Body>
                </Toast>
            </ToastContainer>
    </Container>
  );
}
