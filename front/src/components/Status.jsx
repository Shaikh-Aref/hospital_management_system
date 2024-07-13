import { useState,useEffect } from 'react';
import {Container, Table} from 'react-bootstrap';
import { getStatus } from '../Services/UserServices';
import { useLocation } from 'react-router-dom';

export function Status(){

    const [user, setUser] = useState([]);
    const useQuery = ()=>{
      return new URLSearchParams(useLocation().search);
    }
    const query = useQuery();
    const email = query.get('usermail');

    useEffect(() => {
      if (email) {
        getUserDetails();
      }
    }, [email]);
    
    const getUserDetails = async () => {
      try {
        const response = await getStatus(email);
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };


    return(
      <Container className="mt-4">
        <Table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Location</th>
              <th>Speciality</th>
              <th>Doctor Name</th>
              <th>Date</th>
              <th>Name</th>
              <th>Email</th>
              <th>Contact_no</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {user.map((u) => {
              return (
                <tr>
                  <td>{u.U_id}</td>
                  <td>{u.Location}</td>
                  <td>{u.Speciality}</td>
                  <td>{u.Doctor_Name}</td>
                  <td>{u.Appointment_Date}</td>
                  <td>{u.Patient_Name}</td>
                  <td>{u.email}</td>
                  <td>{u.Contact_Number}</td>
                  <td>{u.Status}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
     )

}