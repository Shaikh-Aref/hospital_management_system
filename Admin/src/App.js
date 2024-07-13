import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './Admin/LoginPage';
import DoctorList from './Admin/DoctorList';
import SignupPage from './Admin/SignupPage';
import { AddDoctor } from './Admin/AddDoctor';
import { PendingStatus } from './Admin/PendingStatus';
import { AllAppointment } from './Admin/AllAppointment';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/doctor-list" element={<DoctorList />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/add-doctor" element={<AddDoctor />} />
        <Route path="/pending-status" element={<PendingStatus/>}/>
        <Route path="/all-appointment" element={<AllAppointment/>}/>
      </Routes>
    </Router>
  );
}

export default App;
