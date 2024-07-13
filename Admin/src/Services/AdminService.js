import { NODE_ADD_DOCTOR, NODE_ADMIN_ALL_DOCTORS,NODE_ALL_USERS,NODE_CHANGE_STATUS,NODE_LOGIN_ROUTE,NODE_PENDING_STATUS,NODE_REMOVE_DOCTOR, NODE_SIGNUP_ROUTE } from "../Constant/constant";
import axios from 'axios';


export function getAllDoctors(){
    return axios.get(NODE_ADMIN_ALL_DOCTORS);
}


export function removeDoctor(doctorId){
    return axios.delete(`${NODE_REMOVE_DOCTOR}/${doctorId}`);
}


export function AddDoctorService(data){
    return axios.post(NODE_ADD_DOCTOR,data);
}

export function adminlogin(credentials){
    return axios.post(NODE_LOGIN_ROUTE,credentials);
}


export function register(credentials){
    return axios.post(NODE_SIGNUP_ROUTE,credentials);
}

export function getPendingUsers(){
    return axios.get(NODE_PENDING_STATUS);
}

export function changeUserStatus(id){
    return axios.get(`${NODE_CHANGE_STATUS}/${id}`);
}

export function getAllUserData(){
    return axios.get(NODE_ALL_USERS);
}