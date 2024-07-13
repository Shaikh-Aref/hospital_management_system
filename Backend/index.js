import express from "express";
import UserRoute from "./Router/UserRoute/usersRoute.js";
import { connection } from "./Utilities/dbConnection.js";
import adminroute from "./Router/AdminRoute/AdminRoute.js";
import cors from 'cors';
const app = express();
const  PORT = 8008;
app.use(cors());
app.use(express.json());

app.use('/',UserRoute);
app.use('/',adminroute);



app.listen(PORT,()=>{
    connection.connect((error)=>{
        if(error){
            console.log(error);
        }
        else{
            console.log("Database Connected");
        }
    })
    console.log(`Server started on port no. ${PORT}`);
})