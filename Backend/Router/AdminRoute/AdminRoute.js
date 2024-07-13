import express from "express";
import { allApointments , changetstatus, getPendingStatus, perticularDayAppointmnet} from "../../Controller/Admin/getAppointment.js";
import { allDoctors, saveDoctor } from "../../Controller/Admin/saveDoctor.js";
import { deleteDoctor } from "../../Controller/Admin/delDoctor.js";
import { sentOtp } from "../../Controller/Admin/OtpGenerator.js";
import { Log_In, registerAdmin } from "../../Controller/Admin/SignUp.js";
const adminroute = express.Router();

adminroute.get("/admin/all-appointments",allApointments);
adminroute.get("/admin/appointments/:date",perticularDayAppointmnet);
adminroute.post("/admin/add-doctor",saveDoctor);
adminroute.delete("/admin/del-doctor/:d_id",deleteDoctor)
adminroute.get("/admin/changestatus/:U_id",changetstatus);
adminroute.post("/admin/otp-sent",sentOtp);
adminroute.get("/all-doctors",allDoctors);
adminroute.get("/pendingStatus",getPendingStatus);
adminroute.post("/login",Log_In);
adminroute.post("/signup",registerAdmin);
export default adminroute;  