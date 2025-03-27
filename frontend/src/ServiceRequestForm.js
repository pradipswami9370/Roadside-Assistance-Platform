import React, { useState } from 'react';
import axios from 'axios';

const ServiceRequestForm = () => {
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // For now, we use a dummy user ID. Later, integrate with user authentication.
      const dummyUserId = "631b59a2d5f4c4a1e5a8b9d0"; 
      const res = await axios.post('http://localhost:5000/api/requests', {
        user: dummyUserId,
        description,
        location,
      });
      setMessage(res.data.message);
      setError('');
    } catch (err) {
      setError('Failed to create request.');
      setMessage('');
    }
  };

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto' }}>
      <h2>Create Service Request</h2>
      {message && <p style={{ color: 'green' }}>{message}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Location:</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit Request</button>
      </form>
    </div>
  );
};

export default ServiceRequestForm;
