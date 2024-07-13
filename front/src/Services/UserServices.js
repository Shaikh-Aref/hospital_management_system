import axios from 'axios';
import { NODE_APPOINTMENT_ROUTE, NODE_DOCTORS_ROUTE, NODE_GET_OTP, NODE_GET_STATUS, NODE_SEARCHED_DOCTOR } from '../Constants/constants';

export function UserService(data){
    axios.post(NODE_APPOINTMENT_ROUTE,data);
}

export function fetchAllDoctors(){
   return axios.get(NODE_DOCTORS_ROUTE);
}


export function fetchsearchedDoctor(){
    return axios.get(NODE_SEARCHED_DOCTOR);
}

export function getOtp(mail){
    return axios.post(NODE_GET_OTP,mail);
}


export function getStatus(email){
    return axios.get(`${NODE_GET_STATUS}/${email}`)
}