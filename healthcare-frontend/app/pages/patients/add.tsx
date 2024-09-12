'use client'; // This must be the very first line

import React, { useState } from 'react';
// import { useRouter } from 'next/navigation'; // Correct import
import { addPatient } from '../../services/patientServices'
import { Patient } from '@/types';

// Define the AddPatient component
const AddPatient = () => {
    // const router = useRouter(); // Correct usage

    const [patientData, setPatientData] = useState<Partial<Patient>>({});

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await addPatient(patientData as Patient);
        // router.push('/patients'); // Redirect after adding patient
    };

    return (
        <div>
            <h1>Add New Patient</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={patientData.name || ''}
                    onChange={(e) => setPatientData({ ...patientData, name: e.target.value })}
                />
                <input
                    type="number"
                    placeholder="Age"
                    value={patientData.age || ''}
                    onChange={(e) => setPatientData({ ...patientData, age: Number(e.target.value) })}
                />
                <textarea
                    placeholder="Medical History"
                    value={patientData.medical_history || ''}
                    onChange={(e) => setPatientData({ ...patientData, medical_history: e.target.value })}
                />
                <textarea
                    placeholder="Treatment Details"
                    value={patientData.treatment_details || ''}
                    onChange={(e) => setPatientData({ ...patientData, treatment_details: e.target.value })}
                />
                <button type="submit">Add Patient</button>
            </form>
        </div>
    );
};

export default AddPatient;
