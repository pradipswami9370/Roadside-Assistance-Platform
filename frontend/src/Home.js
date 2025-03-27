import React from 'react';
import Logout from './Logout'; // If you want to include Logout here

const Home = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to AutoRescue</h1>
      <p>This is the home page.</p>
      <a href="/login">Go to Login</a>
      <br />
      <Logout />
    </div>
  );
};

export default Home;
