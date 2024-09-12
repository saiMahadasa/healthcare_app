import { Patient } from "@/types";
import axios from "axios";

const API_URL = "http://localhost:8000/api/patients/";

export const getPatients = async (): Promise<Patient[]> => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const addPatient = async (patientData: Patient): Promise<Patient> => {
    const response = await axios.post(`${API_URL}add/`, patientData);
    return response.data;
};

