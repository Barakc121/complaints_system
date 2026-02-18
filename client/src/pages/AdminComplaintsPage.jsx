import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AdminComplaintsPage() {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/complaints')
      .then((res) => {
        setComplaints(res.data); 
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h2>list for all write</h2>
      
      {complaints.map((item) => (
        <div key={item._id}>
          <p><strong>title:</strong> {item.category}</p>
          <p><strong>textin:</strong> {item.message}</p>
        </div>
      ))}

    </div>
  );
}

export default AdminComplaintsPage;