

import { getPatients } from '../../services/patientServices';
import { Patient } from '@/types';



// Define the `PatientList` component as an async function
const PatientList = async () => {
    // Fetch patients data
    const patients: Patient[] = await getPatients();
    
    return (
        <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-700 mb-6">Patient List</h1>
        <ul className="space-y-4">
          {patients.map((patient) => (
            <li
              key={patient.id}
              className="p-4 bg-gray-50 rounded-md shadow-md hover:bg-gray-100 transition"
            >
              <h2 className="text-xl font-semibold text-blue-600">
                {patient.name}
              </h2>
              <p className="text-gray-600">Age: {patient.age}</p>
              
            </li>
          ))}
        </ul>
      </div>
    </div>
    );
};

export default PatientList;