import { connection } from "../../Utilities/dbConnection.js";
import { DOCTORS } from "../../Constants/constants.js";

export const doctorList = (req,res)=>{
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

export const loc_doc_spe = (req,res)=>{
    const query = `select * from ${DOCTORS} where location='${req.params.location}' and speciality='${req.params.speciality}'`;
    connection.query(query,(error,result)=>{
        if(error){
            console.log(error);
        }
        else{
            res.send(result);
        }
    })
}