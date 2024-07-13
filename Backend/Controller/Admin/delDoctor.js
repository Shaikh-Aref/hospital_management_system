import { DOCTORS } from "../../Constants/constants.js";
import { connection } from "../../Utilities/dbConnection.js";

export const deleteDoctor = (req,res) =>{
    const query = `delete from ${DOCTORS} where d_id='${req.params.d_id}'`;
    connection.query(query,(error,result)=>{
        if(error){
            console.log(error);
        }
        else{
            res.status(200).send("Doctor Deleted");
        }
    })
}
