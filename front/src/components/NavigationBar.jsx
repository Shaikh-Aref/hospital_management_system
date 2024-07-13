import { Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { REACT_APPOINTMENT_ROUTE, REACT_BASE_ROUTE, REACT_DOCTORS_LIST } from '../Constants/constants';

export function NavigationBar() {
  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container>
        <LinkContainer to={REACT_BASE_ROUTE}>
          <Navbar.Brand>Hospital Appointment System</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to={REACT_BASE_ROUTE}>
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
            <LinkContainer to={REACT_APPOINTMENT_ROUTE}>
              <Nav.Link>Appointment</Nav.Link>
            </LinkContainer>
            <LinkContainer to={REACT_DOCTORS_LIST}>
              <Nav.Link>Doctor</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/check-status">
              <Nav.Link>Check Status</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
