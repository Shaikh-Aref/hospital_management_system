import { useState } from "react";
import { AddDoctorService } from "../../Services/AdminServices";
import { Toast, ToastContainer } from "react-bootstrap";

export function AddDoctor() {

    const [doctorData,setDoctorData] = useState({
        Doctor_Name:'',
        Location:'',
        Speciality:'',
        Doctor_email:'',
        Doctor_Contact_Number:''
    });
    const [errors, setErrors] = useState({});
    const [showToat,setToat] = useState(false);
    const changeToast = ()=>{setToat(false)}
    const handleChange = (event)=>{
        setDoctorData({
            ...doctorData,[event.target.name]:event.target.value
        })
        setErrors({ ...errors, [event.target.name]: '' });
    }

    const validateForm = () => {
        const newErrors = {};
        Object.keys(doctorData).forEach((key) => {
          if (!doctorData[key].trim()) {
            newErrors[key] = 'This field is required';
          }
        });
        return newErrors;
      };

    const handleSubmit = async (event)=>{
        event.preventDefault();

        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
             setErrors(formErrors);
             return;
        }
        console.log(doctorData);
        try{
            const response = await AddDoctorService(doctorData);
            const data = response.data;
            console.log(data);
            setToat(true);
        }
        catch(error){
            console.log(error);
        }

        setDoctorData({
            Doctor_Name:'',
            Location:'',
            Speciality:'',
            Doctor_email:'',
            Doctor_Contact_Number:''
        })
    }
  return (
    <div className="background-container">
      <form onSubmit={handleSubmit}>
        <h2>Add Doctor</h2>
        <div>
          <label htmlFor="doctor_name">Doctor Name</label>
          <input
            type="text"
            id="doctor_name"
            name="Doctor_Name"
            value={doctorData.Doctor_Name}
            onChange={handleChange}
          />
          {errors.Doctor_Name && <span className="error">{errors.Doctor_Name}</span>}
        </div>
        <div>
          <label htmlFor="location">Location :</label>
          <input
            type="text"
            id="Location"
            name="Location"
            value={doctorData.Location}
            onChange={handleChange}
          />
          {errors.Location && (
            <span className="error">{errors.Location}</span>
          )}
        </div>
        <div>
          <label htmlFor="speciality">Speciality :</label>
          <input
            type="text"
            id="Speciality"
            name="Speciality"
            value={doctorData.Speciality}
            onChange={handleChange}
          />
          {errors.Speciality && (
            <span className="error">{errors.Speciality}</span>
          )}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="Doctor_email"
            name="Doctor_email"
            value={doctorData.Doctor_email}
            onChange={handleChange}
          />
          {errors.Doctor_email && <span className="error">{errors.Doctor_email}</span>}
        </div>
        <div>
          <label htmlFor="contact_no">Contact No:</label>
          <input
            type="tel"
            id="Doctor_Contact_Number"
            name="Doctor_Contact_Number"
            value={doctorData.Doctor_Contact_Number}
            onChange={handleChange}
          />
          {errors.Doctor_Contact_Number && (
            <span className="error">{errors.Doctor_Contact_Number}</span>
          )}
        </div>
        <button type="submit">Add</button>
      </form>
      <ToastContainer position="top-end">
        <Toast
          bg="success"
          onClose={changeToast}
          show={showToat}
          delay={3000}
          autohide
        >
          <Toast.Header>
            <strong className="me-auto">Confirmation</strong>
          </Toast.Header>
          <Toast.Body className="text-white">
            Doctor Added Successfully
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
}
