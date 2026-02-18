import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function SubmitComplaintPage() {
  const [category, setCategory] = useState("Food");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/complaints", {
        category,
        message,
      });
      alert("Complaint sent!");
      setMessage("");
    } catch (error) {
      alert("Error sending complaint");
    }
  };

  return (
    <div>
      <h2>Submit Complaint</h2>
      <form onSubmit={handleSubmit}>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Food">Food</option>
          <option value="Equipment">Equipment</option>
          <option value="Orders">Orders</option>
        </select>
        <div>
          {" "}
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter message..."
          />
        </div>{" "}
        <button type="submit">Send</button>
      </form>
      <Link to="/">Back Home</Link>
    </div>
  );
}

export default SubmitComplaintPage;
