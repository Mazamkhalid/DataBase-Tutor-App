import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
function StudentsPage() {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    axios.get('http://localhost/FYPAPI/api/Teacher/GetStudentInfo')
      .then(response => {
        setStudents(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    textAlign: 'center',
    margin: '20px 0'
  };
  const thStyle = {
    backgroundColor: '#f2f2f2',
    padding: '12px'
  };
  const tdStyle = {
    border: '1px solid #ddd',
    padding: '12px'
  };
  return (
    <div>
      <h1 style={{ textAlign: 'center', margin: '20px 0' }}>Students</h1>
      <hr></hr>
      <p style={{ textAlign: 'center', margin: '20px 0' }}>Here you can view and manage your students.</p>
      <div style={{ textAlign: 'center' }}>
      <Link to="/AddStudent">
      <button style={{ marginRight: '10px' }} >Add Student</button>
      </Link>
        <button style={{ marginRight: '10px' }}>Edit Student</button>
        <button>Remove Student</button>
      </div>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Email</th>
            <th style={thStyle}>Semester</th>
            <th style={thStyle}>Section</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => {
            const [firstName, lastName, semester, section, email] = student.split(' ');
            const fullName = firstName + ' ' + lastName;
            return (
              <tr key={index}>
                <td style={tdStyle}>{fullName}</td>
                <td style={tdStyle}>{email}</td>
                <td style={tdStyle}>{semester}</td>
                <td style={tdStyle}>{section}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <a href="/Tdashbord" className="btn btn-primary" >
        Go to Back
      </a>
    </div>
  );
}
export default StudentsPage;
