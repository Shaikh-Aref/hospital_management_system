import {createConnection} from "mysql";
import { HOST_NAME,SCHEMA,USER_NAME,PASSWORD } from "../Constants/constants.js";

export const connection = createConnection({
    host:HOST_NAME,
    user:USER_NAME,
    password:PASSWORD,
    database:SCHEMA
})