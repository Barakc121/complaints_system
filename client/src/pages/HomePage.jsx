import { useState } from "react";

function Submission() {
  function handleSubmit() {
    <h2>the form submition !</h2>
  }

  return (
    <div >
      <h2>Submission</h2>
      <button onClick={handleSubmit}>
        Click me
      </button>
    </div>
  );
}

export default Submission;