import React, { useState } from "react";
import MadlibForm from "./MadlibForm";

const Madlib = () => {
  const [formData, setFormData] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const showWords = (data) => {
    setFormData(data);
    setSubmitted(true);
  };

  const handleRestart = () => {
    setSubmitted(false);
  };

  return (
    <>
      <h1>MadLibs!</h1>
      {submitted ? (
        <>
          <p>
            There was a {formData.color} {formData.noun} who loved a{" "}
            {formData.adjective} {formData.noun2}
          </p>
          <button onClick={handleRestart}>restart</button>
        </>
      ) : (
        <MadlibForm showWords={showWords} />
      )}
    </>
  );
};

export default Madlib;
