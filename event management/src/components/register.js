import React, { useState } from 'react';
import './register.css';
import { Typography } from '@mui/material';
import { useSelector } from 'react-redux';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    event: '',
    password: '',
    confirmPassword: '',
  });
  const user = useSelector((state) => state.user)
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here (e.g., sending data to a server).
    console.log(formData);
  };

  return (
    
    <div className="registration-form-container">
        <div className='heading'>
            <h1>Register</h1>
        </div>
       
      <form onSubmit={handleSubmit}>
      <Typography>{user.login}</Typography>
        <div className="form-group">
          <label htmlFor="firstName">Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Phone</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="event">Event</label>
          <input
            type="event"
            id="event"
            name="event"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        {/* <div className="form-group">
          <label htmlFor="password">Event</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Date</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div> */}
        <button type="submit">Reserve</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
