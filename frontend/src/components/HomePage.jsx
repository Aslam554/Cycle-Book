import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Hero from './Hero';
import Category from './Category';
const HomePage = () => {
  const [cycles, setCycles] = useState([]);

  useEffect(() => {
    const fetchCycles = async () => {
      try {
        const response = await axios.get('http://localhost:5000/cycles/list');
        setCycles(response.data);
      } catch (error) {
        console.error('Error fetching cycles:', error);
      }
    };

    fetchCycles();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <Hero />
     
      <h1 className="text-4xl font-bold text-gray-700 mb-6">Cycle Booking List</h1>
      <ul className="space-y-4">
        {cycles.map((cycle) => (
          <li key={cycle._id} className="bg-white shadow-md rounded-lg p-4">
            <p className="text-gray-700"><strong>Name:</strong> {cycle.name}</p>
            <p className="text-gray-700"><strong>Email:</strong> {cycle.email}</p>
            <p className="text-gray-700"><strong>Roll Number:</strong> {cycle.roll}</p>
            <p className="text-gray-700"><strong>Hostel:</strong> {cycle.hostel}</p>
            <p className="text-gray-700"><strong>Mobile:</strong> {cycle.mobile}</p> {/* Added mobile field */}
            <p className="text-gray-700"><strong>Date:</strong> {new Date(cycle.date).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;