import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h1>here you can to write what you want </h1>
      <h2>HomePage</h2>
      <Link to="/submit">
        <button>to write</button>
      </Link>

      <div>
        <h2>just admin</h2>
        <input type="text" placeholder="password admin" />
        <button>login</button>
      </div>
    </div>
  );
}

export default HomePage;
