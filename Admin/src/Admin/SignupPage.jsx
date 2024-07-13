// import React, { useState } from 'react';
// import { Container, Row, Col, Form, Button, Modal, Alert } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import './SignupPage.css';

// const SignupPage = () => {
//   const [fullName, setFullName] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [error, setError] = useState('');
//   const [showModal, setShowModal] = useState(false);
//   const [isSignedUp, setIsSignedUp] = useState(false);

//   const handleFullNameChange = (e) => setFullName(e.target.value);
//   const handlePhoneNumberChange = (e) => setPhoneNumber(e.target.value);
//   const handlePasswordChange = (e) => setPassword(e.target.value);
//   const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

//   const handleSubmit = (e) => {
//     e.preventDefault(); // Prevent default form submission behavior
//     if (password !== confirmPassword) {
//       setError('Passwords do not match');
//       return;
//     }
//     // Handle signup logic here
//     console.log('Full Name:', fullName);
//     console.log('Phone Number:', phoneNumber);
//     console.log('Password:', password);
//     console.log('Confirm Password:', confirmPassword);
//     setIsSignedUp(true);
//     setShowModal(true); // Show the modal when signed up successfully
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//     // Reset form fields after closing the modal
//     setFullName('');
//     setPhoneNumber('');
//     setPassword('');
//     setConfirmPassword('');
//     setError(''); // Reset error state
//   };

//   return (
//     <>
//       <div className="background-image"></div>
//       <Container className="signup-container">
//         <Row className="justify-content-md-center">
//           <Col md={6}>
//             <Form className="signup-form" onSubmit={handleSubmit}>
//               <h2 className="signup-heading">Sign Up</h2>
//               <Form.Group controlId="formFullName">
//                 <Form.Label>Full Name</Form.Label>
//                 <Form.Control
//                   type="text"
//                   placeholder="Enter your full name"
//                   value={fullName}
//                   onChange={handleFullNameChange}
//                   required
//                 />
//               </Form.Group>
//               <Form.Group controlId="formPhoneNumber">
//                 <Form.Label>Phone Number</Form.Label>
//                 <Form.Control
//                   type="tel"
//                   placeholder="Enter phone number"
//                   value={phoneNumber}
//                   onChange={handlePhoneNumberChange}
//                   required
//                 />
//               </Form.Group>
//               <Form.Group controlId="formPassword">
//                 <Form.Label>Password</Form.Label>
//                 <Form.Control
//                   type="password"
//                   placeholder="Password"
//                   value={password}
//                   onChange={handlePasswordChange}
//                   required
//                 />
//               </Form.Group>
//               <Form.Group controlId="formConfirmPassword">
//                 <Form.Label>Confirm Password</Form.Label>
//                 <Form.Control
//                   type="password"
//                   placeholder="Confirm password"
//                   value={confirmPassword}
//                   onChange={handleConfirmPasswordChange}
//                   required
//                 />
//               </Form.Group>
//               {error && <Alert variant="danger">{error}</Alert>}
//               <Button variant="primary" type="submit" className="signup-button">
//                 Sign Up
//               </Button>
//             </Form>
//             <div className="login-link text-center mt-3">
//               <Link to="/login" className="text-primary">Already have an account? Login</Link>
//             </div>
//           </Col>
//         </Row>
//       </Container>

      
//       <Modal show={showModal} onHide={handleCloseModal}>
//         <Modal.Header closeButton>
//           <Modal.Title>Success</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>Signup successful! You can now <Link to="/login">login</Link>.</Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleCloseModal}>
//             Close
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// };

// export default SignupPage;

// import { Button, Col, Container, Form, Row, Alert } from "react-bootstrap";
// import { useState } from "react";
// import './SignupPage.css';
// import { Link } from "react-router-dom";
// import { register } from "../Services/AdminService";

// const SignupPage = ()=> {
//     const initialCredentials = {
//         username: "",
//         password: "",
//     };

//     const [credentials, setCredentials] = useState(initialCredentials);
//     const [message, setMessage] = useState(null);
//     const [error, setError] = useState(null);

//     const handleFieldChange = (e) => {
//         const { name, value } = e.target;
//         setCredentials({ ...credentials, [name]: value });
//     };

//     const validatePassword = (password) => {
//         const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,10}$/;
//         return passwordRegex.test(password);
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         if (!validatePassword(credentials.password)) {
//             setError("Password must be 6-10 digit long, contains atleast 1 number, 1 uppercase, 1 lowercase, 1 special character.");
//             return;
//         }

//         try {
//             const response = await register(credentials);
//             setMessage(response.data.message);
//             setCredentials(initialCredentials);
//             setError(null);
//         } catch (error) {
//             setError(error.response?.data?.message || "An error occurred");
//             setMessage(null);
//         }
//     };

//     return (
//       <>
//         <div className="background-image"></div>
//         <Container className="mt-5">
//             <h1>Sign Up</h1>
//             <Form onSubmit={handleSubmit} className="signup-container">
//                 {message && <Alert variant="success">{message}</Alert>}
//                 {error && <Alert variant="danger">{error}</Alert>}
//                 <Row>
//                     <Col lg={4}>
//                         <Form.Group className="mb-3">
//                             <Form.Label>Set Username</Form.Label>
//                             <Form.Control
//                                 type="text"
//                                 placeholder="Enter Username"
//                                 name="username"
//                                 value={credentials.username}
//                                 onChange={handleFieldChange}
//                                 aria-label="Enter Username"
//                                 required
//                             />
//                         </Form.Group>
//                     </Col>
//                 </Row>
//                 <Row>
//                     <Col lg={4}>
//                         <Form.Group className="mb-3">
//                             <Form.Label>Set Password</Form.Label>
//                             <Form.Control
//                                 type="password"
//                                 placeholder="Enter Password"
//                                 name="password"
//                                 value={credentials.password}
//                                 onChange={handleFieldChange}
//                                 aria-label="Enter Password"
//                                 required
//                             />
//                         </Form.Group>
//                     </Col>
//                 </Row>
//                 <Row>
//                     <Col lg={4}>
//                         <Button variant="primary" type="submit">
//                             Sign Up
//                         </Button>
//                     </Col>
//                 </Row>
//             </Form>
//             <div className="login-link text-center mt-3">
//               <Link to="/login" className="text-primary">Already have an account? Login</Link>
//             </div>
//         </Container>
//     </>
//     );
// }
// export default SignupPage;


import { Button, Col, Container, Form, Row, Alert } from "react-bootstrap";
import { useState } from "react";
import './SignupPage.css';
import { Link } from "react-router-dom";
import { register } from "../Services/AdminService";

const SignupPage = () => {
  const initialCredentials = {
    username: "",
    password: "",
  };
  const [confirmPassword, setConfirmPassword] = useState('');


  const [credentials, setCredentials] = useState(initialCredentials);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,10}$/;
    return passwordRegex.test(password);
  };
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (credentials.password !== confirmPassword) {
       setError('Passwords do not match');
     return;
     }
    if (!validatePassword(credentials.password)) {
      setError("Password must be 6-10 digit long, contains at least 1 number, 1 uppercase, 1 lowercase, 1 special character.");
      return;
    }

    try {
      const response = await register(credentials);
      setMessage(response.data.message);
      setCredentials(initialCredentials);
      setConfirmPassword('');
      setError(null);
    } catch (error) {
      setError(error.response?.data?.message || "An error occurred");
      setMessage(null);
    }
  };

  return (
    <>
      <div className="background-image"></div>
      <div className="container-center">
        <Container>
          <Form onSubmit={handleSubmit} className="signup-container">
           <h1>Sign Up</h1>
            {message && <Alert variant="success">{message}</Alert>}
            {error && <Alert variant="danger">{error}</Alert>}
            <Row>
              <Col lg={12}>
                <Form.Group className="mb-3">
                  <Form.Label>Set Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Username"
                    name="username"
                    value={credentials.username}
                    onChange={handleFieldChange}
                    aria-label="Enter Username"
                    required
                  />
                </Form.Group>
              </Col>
            </Row>     
            <Row>
              <Col lg={12}>
                <Form.Group className="mb-3">
                  <Form.Label>Set Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter Password"
                    name="password"
                    value={credentials.password}
                    onChange={handleFieldChange}
                    aria-label="Enter Password"
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col lg={12}>
              <Form.Group controlId="formConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                 <Form.Control
                   type="password"
                   name='consfirmpassword'
                   placeholder="Confirm password"
                  value={confirmPassword}
                   onChange={handleConfirmPasswordChange}
                   required
                 />
                 </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col lg={12}>
                <Button variant="primary" type="submit">
                  Sign Up
                </Button>
              </Col>
            </Row>
          </Form>
          <div className="login-link text-center mt-3">
            <Link to="/login" className="text-primary">Already have an account? Login</Link>
          </div>
        </Container>
      </div>
    </>
  );
};

export default SignupPage;
