import axios from "axios";
import { NODE_ADD_DOCTOR, NODE_ADMIN_ALL_DOCTORS, NODE_CHANGE_STATUS, NODE_PENDING_STATUS, NODE_REMOVE_DOCTOR } from "../Constants/constants";



export function AddDoctorService(data){
    return axios.post(NODE_ADD_DOCTOR,data);
}


export function getAllDoctors(){
    return axios.get(NODE_ADMIN_ALL_DOCTORS);
}


export function removeDoctor(doctorId){
    return axios.delete(`${NODE_REMOVE_DOCTOR}/${doctorId}`);
}

export function getPendingUsers(){
    return axios.get(NODE_PENDING_STATUS);
}

export function changeUserStatus(id){
    return axios.get(`${NODE_CHANGE_STATUS}/${id}`);
}