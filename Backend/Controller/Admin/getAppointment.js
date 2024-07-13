import { connection } from "../../Utilities/dbConnection.js";
import { APPOINTMENT } from "../../Constants/constants.js";
import moment from "moment";
export const allApointments = (req,res) =>{
    const query = `select * from ${APPOINTMENT}`;
    connection.query(query,(error,result)=>{
        if(error){
            console.log(error);
        }
        else{
            const formattedResults = result.map((appointment) => {
                return {
                  ...appointment,
                  Appointment_Date: moment(appointment.Appointment_Date).format('YYYY-MM-DD')
                };
              });
            res.send(formattedResults);
        }
    })
}

export const perticularDayAppointmnet = (req,res) =>{
    const query = `select * from ${APPOINTMENT} where appointment_date='${req.params.date}'`
    connection.query(query,(error,result)=>{
        if(error){
            console.log(error);
        }
        else{
            const formattedResults = result.map((appointment) => {
                return {
                  ...appointment,
                  Appointment_Date: moment(appointment.Appointment_Date).format('YYYY-MM-DD')
                };
              });
            res.send(formattedResults);
        }
    })
}
export const getPendingStatus = (req,res)=>{
    const query = `select * from ${APPOINTMENT} where Status='Pending'`;
    connection.query(query,(error,result)=>{
        if(error){
            console.log(error);
        }
        else{
            const formattedResults = result.map((appointment) => {
                return {
                  ...appointment,
                  Appointment_Date: moment(appointment.Appointment_Date).format('YYYY-MM-DD')
                };
              });
            res.send(formattedResults);      
        }
    })
}
export const changetstatus = (req,res)=>{
    // const body = req.body;
    // console.log(body);
    const query = `update ${APPOINTMENT} set status='Approve' where u_id=${req.params.U_id}`;
    connection.query(query,(error)=>{
        if(error){
            console.log(error);
        }
        else{
            res.send("Approved");
        }
    })
}