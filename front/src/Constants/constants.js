export const REACT_BASE_ROUTE = "/";
export const REACT_APPOINTMENT_ROUTE = "/registraion-Appointment";
export const REACT_DOCTORS_LIST = '/doctorslist';

export const NODE_BASE_ROUTE = "http://127.0.0.1:8008";
export const NODE_APPOINTMENT_ROUTE = `${NODE_BASE_ROUTE}/user/appointment`;
export const NODE_DOCTORS_ROUTE = `${NODE_BASE_ROUTE}/doctors`;
export const NODE_SEARCHED_DOCTOR = `${NODE_BASE_ROUTE}/doctors/:location/:speciality`
export const NODE_ADD_DOCTOR = `${NODE_BASE_ROUTE}/admin/add-doctor`
export const NODE_ADMIN_ALL_DOCTORS = `${NODE_BASE_ROUTE}/all-doctors`;
export const NODE_REMOVE_DOCTOR = `${NODE_BASE_ROUTE}/admin/del-doctor`;
export const NODE_GET_OTP = `${NODE_BASE_ROUTE}/user/otp-autorized`;
export const NODE_PENDING_STATUS =  `${NODE_BASE_ROUTE}/pendingStatus`;
export const NODE_CHANGE_STATUS = `${NODE_BASE_ROUTE}/admin/changestatus`;
export const NODE_GET_STATUS = `${NODE_BASE_ROUTE}/user/status`;