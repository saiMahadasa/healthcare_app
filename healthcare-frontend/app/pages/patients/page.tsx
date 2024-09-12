

import { getPatients } from '../../services/patientServices';
import { Patient } from '@/types';



// Define the `PatientList` component as an async function
const PatientList = async () => {
    // Fetch patients data
    const patients: Patient[] = await getPatients();
    
    return (
        <div>
            <h1>Patient List</h1>
            <ul>
                {patients.map((patient) => (
                    <li key={patient.id}>
                        {patient.name}, {patient.age} years old
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PatientList;