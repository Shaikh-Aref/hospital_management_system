import { useEffect, useState } from "react";
import { getAllUserData } from "../Services/AdminService";
import { Container, Table } from "react-bootstrap";
import {Link,useNavigate} from 'react-router-dom'
import { Navbar, Nav, Button } from 'react-bootstrap';

export function AllAppointment(){
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login'); // Redirect to login page
  };
    const[users,setUsers] = useState([]);

    useEffect(()=>{
        getAllData();
    },[])

    const getAllData = async () => {
        const response = await getAllUserData();
        setUsers(response.data);
    }
    return(
      <>
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
              <th>Contact_no</th>
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
                  <td>{u.Status}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </>
     )
} 