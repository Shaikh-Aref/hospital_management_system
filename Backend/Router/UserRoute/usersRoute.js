import express from "express";
import { delAppointment, doAppointment, getStatus, otp_authorized } from "../../Controller/Users/Appointment.js";
import { doctorList,loc_doc_spe } from "../../Controller/Users/getDoctors.js";
const UserRoute = express.Router();

UserRoute.post("/user/appointment",doAppointment);
UserRoute.get("/doctors",doctorList);
UserRoute.get("/doctors/:location/:speciality",loc_doc_spe);
UserRoute.delete("/user/del-appointment/:u_id",delAppointment);
UserRoute.get('/user/status/:email',getStatus);
UserRoute.post('/user/otp-autorized',otp_authorized);
export default UserRoute;