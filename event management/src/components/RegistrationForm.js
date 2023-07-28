// RegistrationForm.js
import React, { useState } from 'react';
import './register.css';
import { useSelector, useDispatch } from 'react-redux';
import { setFormData } from './userslice';

const Registration = () => {
  const [formData, setFormDataLocal] = useState({
    name: '',
    eventName: '',
    mobileNumber: '',
    message: '',
    date: '', // Add the date field here
  });

  const dispatch = useDispatch();
  const registrationData = useSelector((state) => state.registration.formData);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormDataLocal({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setFormData(formData));
  };

  return (
    <div className="registration-form-container">
      <div className='heading'>
        <h1>Register</h1>
      </div>
      <form onSubmit={handleSubmit}>
        {/* ... other form fields ... */}
        <div className="form-group">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="eventName">Event Name</label>
          <input
            type="text"
            id="eventName"
            name="eventName"
            value={formData.eventName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="mobileNumber">Mobile Number</label>
          <input
            type="text"
            id="mobileNumber"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>

      <div className="submitted-data">
        <h2>Submitted Data</h2>
        <p>Name: {registrationData.name}</p>
        <p>Event Name: {registrationData.eventName}</p>
        <p>Mobile Number: {registrationData.mobileNumber}</p>
        <p>Message: {registrationData.message}</p>
        <p>Date: {registrationData.date}</p> {/* Display the date */}
      </div>
    </div>
  );
};

export default Registration;
