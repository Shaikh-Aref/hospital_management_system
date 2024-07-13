import { DOCTORS } from "../../Constants/constants.js";
import { connection } from "../../Utilities/dbConnection.js";

export const saveDoctor = (req,res)=>{
    const body = req.body;
    const query = `insert into ${DOCTORS}(Doctor_name,Location,Speciality,Doctor_email,Doctor_Contact_Number) values('${body.Doctor_Name}','${body.Location}','${body.Speciality}','${body.Doctor_email}','${body.Doctor_Contact_Number}')`;
    connection.query(query,(error)=>{
        if(error){
            console.log(error);
        }
        else{
            res.send("Data Inserted");
        }
    })
 }

export const allDoctors = (req,res)=>{
        const query = `select * from ${DOCTORS}`;
        connection.query(query,(error,results)=>{
            if(error){
                console.log(error);
            }
            else{
                res.send(results);
                console.log(results);
            }
        })
}