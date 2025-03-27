import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import Dashboard from './Dashboard';
import ProtectedRoute from './ProtectedRoute';
import TechnicianRegister from './TechnicianRegister';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register/technician" element={<TechnicianRegister />} />
        <Route path="/" element={<Home />} />
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
