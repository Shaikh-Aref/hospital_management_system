import { connection } from "../../Utilities/dbConnection.js";
import { compareSync, hashSync } from "bcrypt";
import jwt from "jsonwebtoken";

export const Log_In = (req, res) => {
  const { username, password } = req.body;
  const qry = `select * from admin where username='${username}'`;
  connection.query(qry, (error, result) => {
    if (error) {
      res.status(500).send({ message: "Something went wrong....!" });
    } else {
      if (result.length == 0) {
        res.status(400).send({ message: "Username not exists" });
      } else {
        const encryptedPassword = result[0].password;
        if (compareSync(password, encryptedPassword)) {
          const token = jwt.sign({ adminId: result[0].id }, "hello1234");
          res.status(200).send({ message: "Login successful", token: token });
        } else {
          res
            .status(400)
            .send({ message: "Invalid password for the mentioned username" });
        }
      }
    }
  });
};

export const registerAdmin = (req, res) => {
  const { username, password } = req.body;
  const encryptedPassword = hashSync(password, 10);
  const qry = `insert into admin values('${username}','${encryptedPassword}')`;
  connection.query(qry, (error, result) => {
    if (error) {
      res.status(500).send({ message: "Something went wrong....!" });
    } else {
      res.status(200).send({ message: "Admin Registered !" });
    }
  });
};