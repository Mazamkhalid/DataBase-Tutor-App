import React, { useState } from 'react';
import axios from 'axios';

const AddStudentForm = () => {
  const [formData, setFormData] = useState({
    Sid: '',
    Fname: '',
    Lname: '',
    Semester: '',
    Section: '',
    Semail: '',
    Spassword: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post('http://localhost/FYPAPI/api/Teacher/AddStudent', formData)
      .then((response) => {
        console.log(response);
        alert('Data added successfully!');
      })
      .catch((error) => {
        console.log(error);
      });
    setFormData({
      Sid: '',
      Fname: '',
      Lname: '',
      Semester: '',
      Section: '',
      Semail: '',
      Spassword: '',
    });
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '50%' }} onSubmit={handleSubmit}>
        <label>
          Student ID:
          <input
            type="text"
            name="Sid"
            value={formData.Sid}
            onChange={handleInputChange}
          />
        </label>
        <label>
          First Name:
          <input
            type="text"
            name="Fname"
            value={formData.Fname}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="Lname"
            value={formData.Lname}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Semester:
          <select
            name="Semester"
            value={formData.Semester}
            onChange={handleInputChange}
          >
            <option value="">--Select--</option>
            {[...Array(8).keys()].map((semester) => (
              <option key={semester} value={semester + 1}>
                {semester + 1}
              </option>
            ))}
          </select>
        </label>
        <label>
          Section:
          <select
            name="Section"
            value={formData.Section}
            onChange={handleInputChange}
          >
            <option value="">--Select--</option>
            {['A', 'B', 'C', 'D'].map((section) => (
              <option key={section} value={section}>
                {section}
              </option>
            ))}
          </select>
        </label>
        <label>
          Email:
          <input
            type="email"
            name="Semail"
            value={formData.Semail}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="Spassword"
            value={formData.Spassword}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">
          Add Student
        </button>
      </form>
    </div>
  );
};

export default AddStudentForm;
