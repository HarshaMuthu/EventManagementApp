import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addFeedback } from './Api';

const FeedForm = () => {
  const [formdata, setFormdata] = useState({
    email: '',
    name: '',
    subject: '',
    message: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    setFormdata({ ...formdata, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addFeedback(formdata);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="down">
      <div className="login-form">
        <h2 style={{ marginBottom: '20px' }}>FEEDBACK</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            id="email"
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '10px',
              marginBottom: '10px',
              borderRadius: '5px',
              border: '1px solid #ccc',
            }}
          />
          <input
            type="text"
            placeholder="Name"
            id="name"
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '10px',
              marginBottom: '10px',
              borderRadius: '5px',
              border: '1px solid #ccc',
            }}
          />
          <input
            type="text"
            placeholder="Subject"
            id="subject"
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '10px',
              marginBottom: '10px',
              borderRadius: '5px',
              border: '1px solid #ccc',
            }}
          />
          <textarea
            placeholder="Message"
            id="message"
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '10px',
              marginBottom: '10px',
              borderRadius: '5px',
              border: '1px solid #ccc',
            }}
          />
          <button
            type="submit"
            style={{
              backgroundColor: '#4CAF50',
              color: 'white',
              padding: '12px 20px',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Submit
          </button>
          <div className="button"></div>
        </form>
      </div>
    </div>
  );
};

export default FeedForm;
