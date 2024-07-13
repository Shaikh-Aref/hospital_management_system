import { APPOINTMENT } from "../../Constants/constants.js";
import { connection } from "../../Utilities/dbConnection.js";
import nodemailer from 'nodemailer';
import otpgenerator from "otp-generator";
import moment from "moment";


export const doAppointment = (req,res) =>{
    const body = req.body;
    const query = `insert into ${APPOINTMENT}(Location,Speciality,doctor_name,appointment_date,patient_name,email,contact_number) values('${body.location}','${body.speciality}','${body.doctor_name}','${body.date}','${body.patient_name}','${body.email}','${body.contact_no}');`

    connection.query(query,(error,result)=>{
        if(error){
        console.log(error);
        res.status(500).send({msg:"Something Went Wrong"});
        }
        else{
            console.log(result);
            res.status(200).send({msg:"Appointment Done"});
        }
    });

}

export const otp_authorized = (req,res)=>{
    const body = req.body;
    console.log(body);
    const query = `select count(*) as count from ${APPOINTMENT} where Email='${body.email}'`;
    connection.query(query,(error,result)=>{
        if(error){
            res.status(500).send("Error");
        }
        else{
            if(result[0].count>0){
                const transporter = nodemailer.createTransport({
                    service:'gmail',
                    host: "smtp.gmail.email",
                    port: 587,
                    secure: false, // Use `true` for port 465, `false` for all other ports
                    auth: {
                      user: "apurvjain2310@gmail.com",
                      pass: "iune xewp honv dsbh",
                    },
                  });
                  const otp = otpgenerator.generate(4,{lowerCaseAlphabets:false,specialChars:false,upperCaseAlphabets:false});
                const receiver = {  
                from: 'apurvjain2310@gmail.com', // sender address
                to: `${body.email}`, // list of receivers
                subject: "OTP", // Subject line
                text: `Hello Customer, Thank You for reaching us.(Do Not Share Your OTP With Any One)Your OTP is : ${otp}`, // plain text body
                }
            
                transporter.sendMail(receiver,(error,emailRes)=>{
                    if(error){
                        console.log(error);
                    }
                    else{
                        console.log("Mail sent");
                    }
                });
                res.send(otp);
            }
            else{
                res.send("Appointment is Not Done");
            }
        }
    })
    


}
export const getStatus = (req,res)=>{
    // const body = req.body;
    console.log(req.params.email);
    const query = `select * from ${APPOINTMENT} where email='${req.params.email}'`;
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




export const delAppointment = (req,res)=>{
    const query = `delete from ${APPOINTMENT} where U_id='${req.params.u_id}'`;
    connection.query(query,(error)=>{
        if(error){
            console.log(error);
        }
        else{
            res.send({msg:"Appointment Deleted"});
        }
    })
}
