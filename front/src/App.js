// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavigationBar } from "./components/NavigationBar";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import LoginPage from "./components/LoginPage";
import Appointment from "./components/Appointment";
import { Footer } from "./components/Footer";
import Doctor from "./components/Doctor"; // Import Doctor component
import { REACT_APPOINTMENT_ROUTE, REACT_BASE_ROUTE, REACT_DOCTORS_LIST } from "./Constants/constants";
import {DoctorNotAvailable} from "./components/DoctorNotAvailable";
import { AddDoctor } from "./components/Admin/AddDoctor";
import { DoctorTable } from "./components/Admin/DoctorTable";
import { CheckStatus } from "./components/CheckStatus";
import { PendingStatus } from "./components/Admin/PendingStatus";
import { Status } from "./components/Status";
 
function App() {
  return (
      <Router>
        <div>
          <NavigationBar />
          <Routes>
            <Route path={REACT_BASE_ROUTE} element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path={REACT_APPOINTMENT_ROUTE} element={<Appointment />} />
            <Route path={REACT_DOCTORS_LIST} element={<Doctor />} />{" "}
            <Route path="/doctor-not-available" element={<DoctorNotAvailable />} />
            {/* <Route path="/add-doctor" element={<AddDoctor/>} /> */}
            <Route path="/check-status" element={<CheckStatus/>}></Route>
            {/* <Route path="/all-doctors" element={<DoctorTable/>} />
            <Route path="/changeStatus" element={<PendingStatus/>} /> */}
            <Route path="/Status" element={<Status></Status>}></Route>
            {/* Add Doctor route */}
          </Routes>
          <Footer />
        </div>
      </Router>
  );
}

export default App;
