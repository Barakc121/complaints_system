import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SubmitComplaintPage from './pages/SubmitComplaintPage';
import AdminComplaintsPage from './pages/AdminComplaintsPage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/submit" element={<SubmitComplaintPage />} />
        <Route path="/admin/complaints" element={<AdminComplaintsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;