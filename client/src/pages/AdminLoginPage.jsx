import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminLoginPage() {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === '325276319') {
      navigate('/admin/complaints');
    } else {
      alert('Wrong password!');
    }
  };

  return (
    <div>
      <h2>Admin Login</h2>
      <form onSubmit={handleLogin}>
        <input 
          type="password" 
          placeholder="Enter Password Admin" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default AdminLoginPage;