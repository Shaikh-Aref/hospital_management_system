import React, { useState } from 'react';
import './Appointment.css'; // Ensure this CSS file is imported
import { UserService } from '../Services/UserServices';
import { Toast, ToastContainer} from 'react-bootstrap';

function AppointmentForm() {
  const [formData, setFormData] = useState({
    location: '',
    speciality: '',
    doctor_name: '',
    date: '',
    patient_name: '',
    email: '',
    contact_no: ''
  });
  const [showToat,setToat] = useState(false);
  const [errors, setErrors] = useState({});
  const changeToast = ()=>{setToat(false)}
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' }); // Clear error message when user starts typing
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key].trim()) {
        newErrors[key] = 'This field is required';
      }
    });
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    // Handle form submission here
    console.log('Form Data:', formData);
    try{
    const response = await UserService(formData);
    const dat = await response;
   // alert('Registration successful');
    setToat(true);
    }
    catch(error){
      alert('Registration Done');
    }
    // Show success alert
    // Clear form fields
    setFormData({
      location: '',
      speciality: '',
      doctor_name: '',
      date: '',
      patient_name: '',
      email: '',
      contact_no: ''
    });
  };

  return (
    <div className="background-container">
      <form onSubmit={handleSubmit}>
        <h2>Appointment Form</h2>
        <div>
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />
          {errors.location && <span className="error">{errors.location}</span>}
        </div>
        <div>
          <label htmlFor="speciality">Speciality:</label>
          <input
            type="text"
            id="speciality"
            name="speciality"
            value={formData.speciality}
            onChange={handleChange}
          />
          {errors.speciality && <span className="error">{errors.speciality}</span>}
        </div>
        <div>
          <label htmlFor="doctor_name">Doctor's Name:</label>
          <input
            type="text"
            id="doctor_name"
            name="doctor_name"
            value={formData.doctor_name}
            onChange={handleChange}
          />
          {errors.doctor_name && <span className="error">{errors.doctor_name}</span>}
        </div>
        <div>
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
          {errors.date && <span className="error">{errors.date}</span>}
        </div>
        <div>
          <label htmlFor="patient_name">Patient's Name:</label>
          <input
            type="text"
            id="patient_name"
            name="patient_name"
            value={formData.patient_name}
            onChange={handleChange}
          />
          {errors.patient_name && <span className="error">{errors.patient_name}</span>}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div>
          <label htmlFor="contact_no">Contact No:</label>
          <input
            type="tel"
            id="contact_no"
            name="contact_no"
            value={formData.contact_no}
            onChange={handleChange}
          />
          {errors.contact_no && <span className="error">{errors.contact_no}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
      <ToastContainer position='top-end'>
        <Toast bg="success" onClose= {changeToast} show={showToat} delay={3000} autohide>
          <Toast.Header>
            <strong className='me-auto'>Confirmation</strong>
          </Toast.Header>
          <Toast.Body className='text-white'>Appointment Done Successfully</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
}

export default AppointmentForm;
