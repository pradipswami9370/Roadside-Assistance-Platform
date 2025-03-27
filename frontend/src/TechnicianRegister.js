import React, { useState } from 'react';
import axios from 'axios';

const TechnicianRegister = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [garageName, setGarageName] = useState('');
  const [location, setLocation] = useState('');
  const [servicesOffered, setServicesOffered] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/technicians/register', {
        name,
        email,
        password,
        garageName,
        location,
        servicesOffered,
      });
      setMessage(res.data.message);
      setError('');
    } catch (err) {
      setError(err.response.data.message || 'Registration failed.');
      setMessage('');
    }
  };

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto' }}>
      <h2>Technician Registration</h2>
      {message && <p style={{ color: 'green' }}>{message}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleRegister}>
        <div>
          <label>Name:</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Password:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Garage Name:</label>
          <input 
            type="text" 
            value={garageName} 
            onChange={(e) => setGarageName(e.target.value)} 
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
        <div>
          <label>Services Offered:</label>
          <input 
            type="text" 
            value={servicesOffered} 
            onChange={(e) => setServicesOffered(e.target.value)} 
          />
        </div>
        <button type="submit">Register as Technician</button>
      </form>
    </div>
  );
};

export default TechnicianRegister;
