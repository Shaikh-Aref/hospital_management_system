import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './CheckStatus.css'; // Import custom CSS for CheckStatus page
import { getOtp } from '../Services/UserServices';

export const CheckStatus = () => {
    const navigate  = useNavigate();
    const [email, setEmail] = useState({email:''});
    const [otp, setOtp] = useState('');
    const [isOtpSent, setIsOtpSent] = useState(false); // State to control OTP input field visibility
    const [otpData,setOtpData] = useState(null);

    const handleEmailChange = (e) => setEmail({email:e.target.value});
    const handleOtpChange = (e) => setOtp(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email);
        const response = await getOtp(email);
        const data  = await response.data;
        setOtpData(data);
        console.log(data);
        setIsOtpSent(true);
    };

    const handleOtpSubmit = (e) => {
        e.preventDefault();
        console.log('OTP:', otp);

        if (otp == otpData) {
            navigate(`/Status?usermail=${email.email}`);
        } else {
            alert('Invalid OTP');
            setOtp('');
        }
    };

    return (
        <Container fluid className="login-container">
            <div className="form-wrapper">
                <h2 className="text-center mb-4">Check Status</h2>
                <Row className="justify-content-md-center">
                    <Col>
                        {!isOtpSent ? (
                            <Form onSubmit={handleSubmit} className='form'>
                                <Form.Group controlId="formBasicMobileNumber">
                                    <Form.Label>Email Id</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter Email"
                                        onChange={handleEmailChange}
                                        required
                                    />
                                </Form.Group>
                                <Button variant="primary" type="submit" className="w-100 mt-3">
                                    Get OTP
                                </Button>
                            </Form>
                        ) : (
                            <Form onSubmit={handleOtpSubmit} className='form'>
                                <Form.Group controlId="formBasicOtp">
                                    <Form.Label>OTP</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter OTP"
                                        value={otp}
                                        onChange={handleOtpChange}
                                        required
                                    />
                                </Form.Group>
                                <Button variant="primary" type="submit" className="w-100 mt-3">
                                    Submit OTP
                                </Button>
                            </Form>
                        )}
                    </Col>
                </Row>
            </div>
        </Container>
    );
};
