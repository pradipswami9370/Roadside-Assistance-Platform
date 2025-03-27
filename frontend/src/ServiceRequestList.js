import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ServiceRequestList = () => {
  const [requests, setRequests] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/requests');
        setRequests(res.data);
        setError('');
      } catch (err) {
        setError('Failed to fetch service requests.');
      }
    };

    fetchRequests();
  }, []);

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h2>Service Requests</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {requests.map((req) => (
          <li key={req._id}>
            <strong>Description:</strong> {req.description} <br />
            <strong>Location:</strong> {req.location} <br />
            <strong>Status:</strong> {req.status} <br />
            <strong>User:</strong> {req.user?.name || 'Unknown'} 
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceRequestList;
