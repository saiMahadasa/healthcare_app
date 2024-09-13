'use client'; // This must be the very first line

import React, { useState } from 'react';
// import { useRouter } from 'next/navigation'; // Correct import
import { addPatient } from '../../services/patientServices'
import { Patient } from '@/types';

// Define the AddPatient component
const AddPatient = () => {
    // const router = useRouter(); // Correct usage

    const [patientData, setPatientData] = useState<Partial<Patient>>({});

      // Single onChange handler for all inputs
      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setPatientData({
            ...patientData,
            [name]: name === 'age' ? Number(value) : value, // Convert age to number if it's an age field
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await addPatient(patientData as Patient);
        // router.push('/patients'); // Redirect after adding patient
    };

    return (
        <div>
             <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-700 mb-6">Add New Patient</h1>
           
            <form onSubmit={handleSubmit} className="space-y-6">
            <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder='Name'
              value={patientData.name || ''}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Age
            </label>
            <input
              type="text"
              name="age"
               placeholder="Age"
               value={patientData.age || ''}
               onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Medical History
            </label>
            <textarea
              name="medical_history"
                placeholder="Medical History"
                value={patientData.medical_history || ''}
               onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Treatment Details
            </label>
            <textarea
              name="treatment_details"
                placeholder="Treatment Details"
                value={patientData.treatment_details || ''}
                onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
           
                <button
              type="submit"
              className="w-full p-3 bg-blue-500 text-white font-bold rounded-md shadow-lg hover:bg-blue-600 transition"
            >
              Add Patient
            </button>
            </form>
            </div>
            </div>
        </div>
    );
};

export default AddPatient;
