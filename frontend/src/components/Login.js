import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Send POST request to the backend
      const response = await axios.post('http://localhost:3003/login', { email, password });

      // Check the role returned from the backend and show respective messages
      if (response.data.role === 'admin') {
        setMessage('Admin login successful!');
        // Optionally redirect to the admin dashboard
        window.location.href = '/admin-dashboard'; // Adjust the route as per your app structure
      } else {
        setMessage('User login successful!');
        // Optionally redirect to the user dashboard
        window.location.href = '/user-dashboard'; // Adjust the route as per your app structure
      }
    } catch (error) {
      setMessage(error.response ? error.response.data.message : 'An error occurred.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
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
        <button type="submit">Login</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Login;
