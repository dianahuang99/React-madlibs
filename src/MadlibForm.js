import React, { useState } from "react";

const MadlibForm = ({ showWords }) => {
  const INITIAL_STATE = { noun: "", noun2: "", adjective: "", color: "" };
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData(INITIAL_STATE);
    showWords(formData);
  };

  /** Update local state w/curr state of input elem */

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="noun">noun: </label>
      <input
        id="noun"
        name="noun"
        value={formData.noun}
        onChange={handleChange}
      />
      <label htmlFor="noun2">noun2: </label>
      <input
        id="noun2"
        name="noun2"
        value={formData.noun2}
        onChange={handleChange}
      />
      <label htmlFor="adjective">adjective: </label>
      <input
        id="adjective"
        name="adjective"
        value={formData.adjective}
        onChange={handleChange}
      />
      <label htmlFor="color">Color: </label>
      <input
        id="color"
        name="color"
        value={formData.color}
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  );
};

export default MadlibForm;
