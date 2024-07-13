// import React, { useState } from 'react';
// import { Container, Row, Col, Form, Button } from 'react-bootstrap';
// import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
// import './LoginPage.css'; // Import custom CSS for LoginPage

// const LoginPage = () => {
//   const [mobileNumber, setMobileNumber] = useState('');
//   const [password, setPassword] = useState('');
//   const [otp, setOtp] = useState('');
//   const [isOtpSent, setIsOtpSent] = useState(false); // State to control OTP input field visibility
//   const navigate = useNavigate(); // Initialize useNavigate

//   const handleMobileNumberChange = (e) => setMobileNumber(e.target.value);
//   const handlePasswordChange = (e) => setPassword(e.target.value);
//   const handleOtpChange = (e) => setOtp(e.target.value);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle login logic here
//     console.log('Mobile Number:', mobileNumber);
//     console.log('Password:', password);

//     // Simulate OTP sending
//     setIsOtpSent(true);
//   };

//   const handleOtpSubmit = (e) => {
//     e.preventDefault();
//     // Handle OTP validation logic here
//     console.log('OTP:', otp);

//     // Simulate OTP validation and redirection
//     if (otp === '123456') { // Replace with actual OTP validation logic
//       navigate('/doctor-list'); // Redirect to new page
//     } else {
//       alert('Invalid OTP');
//     }
//   };

//   return (
//     <Container className="login-container">
//       <h2 className="text-center mb-5">LOGIN</h2>
//       <Row className="justify-content-md-center">
//         <Col>
//           {!isOtpSent ? (
//             <Form onSubmit={handleSubmit}>
//               <Form.Group controlId="formBasicMobileNumber">
//                 <Form.Label>Mobile Number</Form.Label>
//                 <Form.Control
//                   type="text"
//                   placeholder="Enter mobile number"
//                   value={mobileNumber}
//                   onChange={handleMobileNumberChange}
//                   required
//                 />
//               </Form.Group>
//               <Form.Group controlId="formBasicPassword">
//                 <Form.Label>Password</Form.Label>
//                 <Form.Control
//                   type="password"
//                   placeholder="Password"
//                   value={password}
//                   onChange={handlePasswordChange}
//                   required
//                 />
//               </Form.Group>
//               <Button variant="primary" type="submit" className="w-100 mt-4">
//                 Login
//               </Button>
//             </Form>
//           ) : (
//             <Form onSubmit={handleOtpSubmit}>
//               <Form.Group controlId="formBasicOtp">
//                 <Form.Label>OTP</Form.Label>
//                 <Form.Control
//                   type="text"
//                   placeholder="Enter OTP"
//                   value={otp}
//                   onChange={handleOtpChange}
//                   required
//                 />
//               </Form.Group>
//               <Button variant="primary" type="submit" className="w-100 mt-3">
//                 Submit OTP
//               </Button>
//             </Form>
//           )}
//           <div className="text-center mt-4">
//             {/* <a href="/signup" className="text-primary"></a> */}
//             <Link to="/signup" className="text-primary">Don't have an account? Sign up</Link>
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default LoginPage;


// import { Link, useNavigate } from 'react-router-dom';
// import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
// import { useState } from "react";
// import { adminlogin } from "../Services/AdminService";
// import './LoginPage.css'; 
// const LoginPage = () => {
//   const initialCredentials = {
//     username: "",
//     password: "",
//   };

//   const [credentials, setCredentials] = useState(initialCredentials);
//   const [errors, setErrors] = useState({});
//   const [loginError, setLoginError] = useState("");
//   const [loginSuccess, setLoginSuccess] = useState(false);

//   const handleFieldChange = (e) => {
//     const { name, value } = e.target;
//     setCredentials({ ...credentials, [name]: value });
//     setErrors({ ...errors, [name]: "" });
//     setLoginError("");
//   };

//   const validate = () => {
//     const newErrors = {};
//     if (!credentials.username) {
//       newErrors.username = "Username is required";
//     }
//     if (!credentials.password) {
//       newErrors.password = "Password is required";
//     }
//     return newErrors;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const validationErrors = validate();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }

//     try {
//       const response = await adminlogin(credentials);
//       console.log(response.data.message);
//       setLoginSuccess(true);
//       setCredentials(initialCredentials);
//       // Handle successful login (e.g., redirect, show success message)
//     } catch (error) {
//       console.log(error);
//       setLoginError(error.response?.data?.message || "Login failed");
//     }
//   };

//   return (
//     <Container >
//       <Form onSubmit={handleSubmit} className="login-container">
//       <h1>Log In</h1>
//         <Row>
//           <Col lg={4}>
//             <Form.Group className="mb-3">
//               <Form.Label>Username</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter Username"
//                 name="username"
//                 value={credentials.username}
//                 onChange={handleFieldChange}
//                 isInvalid={!!errors.username}
//               />
//               <Form.Control.Feedback type="invalid">
//                 {errors.username}
//               </Form.Control.Feedback>
//             </Form.Group>
//           </Col>
//         </Row>
//         <Row>
//           <Col lg={4}>
//             <Form.Group className="mb-3">
//               <Form.Label>Password</Form.Label>
//               <Form.Control
//                 type="password"
//                 placeholder="Enter Password"
//                 name="password"
//                 value={credentials.password}
//                 onChange={handleFieldChange}
//                 isInvalid={!!errors.password}
//               />
//               <Form.Control.Feedback type="invalid">
//                 {errors.password}
//               </Form.Control.Feedback>
//             </Form.Group>
//           </Col>
//         </Row>
//         <Row>
//           <Col lg={4}>
//             <Button variant="primary" type="submit">
//               Login
//             </Button>
//           </Col>
//         </Row>
//         <Container className="mt-3">
//            <Link to="/signup" className="text-primary">Don't have an account? Sign up</Link>
//         </Container>      </Form>

//       {loginError && (
//         <Row className="mt-4">
//           <Col lg={4}>
//             <Alert variant="danger">{loginError}</Alert>
//           </Col>
//         </Row>
//       )}
//       {loginSuccess && (
//         <Row className="mt-4">
//           <Col lg={4}>
//             <Alert variant="success">Login Successful!</Alert>
//           </Col>
//         </Row>
//       )}
//     </Container>
//   );
// }
// export default LoginPage;

import { Link,useNavigate } from 'react-router-dom';
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { useState } from "react";
import { adminlogin } from "../Services/AdminService";
import './LoginPage.css'; 

const LoginPage = () => {
  const initialCredentials = {
    username: "",
    password: "",
  };
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState(initialCredentials);
  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
    setErrors({ ...errors, [name]: "" });
    setLoginError("");
  };

  const validate = () => {
    const newErrors = {};
    if (!credentials.username) {
      newErrors.username = "Username is required";
    }
    if (!credentials.password) {
      newErrors.password = "Password is required";
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await adminlogin(credentials);
      console.log(response.data.message);
      setLoginSuccess(true);
      setCredentials(initialCredentials);
      // Handle successful login (e.g., redirect, show success message)
    } catch (error) {
      console.log(error);
      setLoginError(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="login-container">
      <Form onSubmit={handleSubmit} className="login-form">
        <h1>Log In</h1>
        <Row>
          <Col lg={12}>
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Username"
                name="username"
                value={credentials.username}
                onChange={handleFieldChange}
                isInvalid={!!errors.username}
              />
              <Form.Control.Feedback type="invalid">
                {errors.username}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                name="password"
                value={credentials.password}
                onChange={handleFieldChange}
                isInvalid={!!errors.password}
              />
              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Col>
        </Row>
        <Container className="mt-3">
           <Link to="/signup" className="text-primary">Don't have an account? Sign up</Link>
        </Container>      
      </Form>

      {loginError && (
        <Row className="mt-4">
          <Col lg={12}>
            <Alert variant="danger">{loginError}</Alert>
          </Col>
        </Row>
      )}
      {loginSuccess && (
        <Row className="mt-4">
          <Col lg={12}>
            <Alert variant="success">Login Successful!</Alert>
            {navigate('/doctor-list')}          
          </Col>
        </Row>
      )}
    </div>
  );
}

export default LoginPage;

