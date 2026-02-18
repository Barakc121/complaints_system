import { useState } from "react";
import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";

function HomePage() {
  function login() {
    console.log("object");

    // await fetch
  }
  return (
    <div>
      <nav className="navbar">
        <h2>HomePage</h2>
      </nav>
      <div className="main">
        <h1 className="title">תיבת תלונות אנונימיות בבסיס צה"ל</h1>
        <h2> שלחו תלונה בצורה אנונימית ונאותה </h2>
        <Link to="/submit">
          <button className="submit-btn">to write</button>
        </Link>
      </div>
      <div className="admin">
        <h2>just admin</h2>
        <input
          type="text"
          placeholder="password admin"
          className="input-admin"
        />
        <Link to='/admin'>
        <button onClick={login} className="submit-btn">
          login
        </button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
