// import React, { useState } from "react";


// const AssignmentList = (props) => {
//     const assignmentss = props.assignments;
//   const [assignments, setAssignments] = useState([
//     {
//       id: 1,
//       name: 'Assignment 1',
//       completed: false
//     },
//     {
//       id: 2,
//       name: 'Assignment 2',
//       completed: false
//     },
//     {
//       id: 3,
//       name: 'Assignment 3',
//       completed: false
//     },
//     {
//         id: 4,
//         name: 'Assignment 4',
//         completed: false
//       },
//       {
//         id: 5,
//         name: 'Assignment 5',
//         completed: true
//       },
//       {
//         id: 6,
//         name: 'Assignment 6',
//         completed: true
//       },
//   ]);

//   const toggleAssignment = (id) => {
//     const updatedAssignments = assignments.map(assignment => {
//       if (assignment.id === id) {
//         return {
//           ...assignment,
//           completed: !assignment.completed
//         }
//       }
//       return assignment;
//     });

//     setAssignments(updatedAssignments);
//   };

//   return (
//     <div>
//       <h1 style={{textAlign: "center",marginTop:30, color: "#007bff"}}>Assignment List</h1>

//       {assignments.map(assignment => (
//         <div key={assignment.id} style={{textAlign: "center",marginTop:30 ,}} >
//              <span style={{color: assignment.completed ? "green" : "black"}}>{assignment.name}</span>
             
//           <input type="checkbox" checked={assignment.completed} onChange={() => toggleAssignment(assignment.id)}
//            style={{ marginLeft:50}} />
         
         
//           <button type="button" onClick={() => props.handleSolve(assignment.id)} style={{ marginLeft:30,backgroundColor: "#007bff", color: "white", padding: "5px 10px"}}>Solve</button>
          
//         </div>
        
//       ))}
//      </div>
// );
// };

// export default AssignmentList;


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function AssignmentsPage() {
  const headingStyle = {
    textAlign: 'center',
    margin: '20px 0'
  };

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

  const buttonStyle = {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '12px 20px',
    margin: '10px 2px',
    border: 'none',
    cursor: 'pointer',
    width: '100%',
    textAlign: 'center'
  };

  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    fetch('http://localhost/FYPAPI/api/Student/GetAssgs')
      .then(response => response.json())
      .then(data => setAssignments(data));
  }, []);

  return (
    <div>
      <h1 style={headingStyle}>Assignments List</h1>
      <p style={{ textAlign: 'center', margin: '20px 0' }}>Submit your Assignment Before Deadline.</p>
      <div style={{ textAlign: 'center' }}>
      <Link to="/AssgForm">
        {/* <button style={buttonStyle}>Create Assignment</button>
      
        <button style={buttonStyle}>Edit Assignment</button>
        <button style={buttonStyle}>Delete Assignment</button> */}
        </Link>
      </div>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Title</th>
            <th style={thStyle}>Deadline</th>
            <th style={thStyle}>Database Name</th>
          </tr>
        </thead>
        <tbody>
          {assignments.map((assignment, index) => (
            <tr key={index}>
              <td style={tdStyle}>{assignment.Title}</td>
              <td style={tdStyle}>{assignment.Deadline}</td>
              <td style={tdStyle}>{assignment.DatabaseName}</td>
              <Link to="/DBselect" className="btn btn-primary">
        Solve
      </Link>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/Tdashbord" className="btn btn-primary">
        Go to Back
      </Link>

    </div>
  );
}

export default AssignmentsPage;
