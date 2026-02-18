import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./SubmitComplaintPage.css";

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
      <nav className="navbar">
        <h4 className="titleNavbar">Submit Complaint</h4>
      </nav>
      <div className="main">
        <h1 className="title">שליחת תלונה אנונימית</h1>
        <div>
          <h4>:תחום התלונה</h4>

          <form onSubmit={handleSubmit}>
            <select
            className="select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="Food">Food</option>
              <option value="Equipment">Equipment</option>
              <option value="Orders">Orders</option>
            </select>
            <div >
              <h4>:תוכן התלונה</h4>
              <textarea
                className="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter message..."
              />
            </div>{" "}
            <button className="back" type="submit">Send</button>
          </form>
        </div>
      </div>
        <Link to="/" className="back">Back Home</Link>
    </div>
  );
}

export default SubmitComplaintPage;
