import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import custom CSS for Navbar

export default function AppNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/home">
          MyApp
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-center">
            <Nav.Link as={Link} to="/doctor-list">Doctor List</Nav.Link>
            <Nav.Link as={Link} to="/add-doctor">Add Doctor</Nav.Link>
            <Nav.Link as={Link} to="/pending-status">Pending Status</Nav.Link>
          </Nav>
          <Nav>
            <Button variant="outline-light" as={Link} to="/login">Logout</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
