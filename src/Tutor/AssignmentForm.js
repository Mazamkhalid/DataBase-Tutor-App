import { useState, useEffect } from 'react';

function AssignmentForm() {
  const [assignment, setAssignment] = useState({
    AssignmentNumber: 0,
    Title: '',
    Description: '',
    DeadLine: '',
    DatabaseName: ''
  });
  const [assignments, setAssignments] = useState([]);
  const [isNewAssignment, setIsNewAssignment] = useState(true);
  const [databases, setDatabases] = useState([]);
  

  useEffect(() => {
    // Fetch list of assignments
    fetch('http://localhost/FYPAPI/api/Student/GetAssgs')
      .then(response => response.json())
      .then(data => setAssignments(data))
      .catch(error => console.error(error));

    // Fetch list of databases
   
 fetch('http://localhost/FYPAPI/api/Teacher/GetDatabaseList')
      .then(response => response.json())
      .then(data => setDatabases(data))
      .catch(error => console.error(error));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Send a POST request to the API endpoint
    fetch('http://localhost/FYPAPI/api/Teacher/AssgEntry', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(assignment)
    })
      .then(response => response.text())
      .then(message => {
        alert(message);
        // Fetch updated list of assignments after successful submission
        fetch('http://localhost/FYPAPI/api/Teacher/GetAssgs')
          .then(response => response.json())
          .then(data => setAssignments(data))
          .catch(error => console.error(error));
      })
      .catch(error => console.error(error));
  };

  const handleEdit = (assignment) => {
    setAssignment(assignment);
    setIsNewAssignment(false);
  };

  const handleCancelEdit = () => {
    setAssignment({
      AssignmentNumber: 0,
      Title: '',
      Description: '',
      DueDate: '',
      DatabaseName: ''
    });
    setIsNewAssignment(true);
  };

  const handleDelete = (assignment) => {
    // Send a DELETE request to the API endpoint
    fetch(`http://localhost/FYPAPI/api/Teacher/DeleteAssg/${assignment.AssignmentNumber}`, {
      method: 'DELETE',
    })
      .then(response => response.text())
      .then(message => {
        alert(message);
        // Fetch updated list of assignments after successful deletion
        fetch('http://localhost/FYPAPI/api/Teacher/GetAssgs')
          .then(response => response.json())
          .then(data => setAssignments(data))
          .catch(error => console.error(error));
      })
      .catch(error => console.error(error));
  };

  const isNewNumber = (number) => {
    return assignments.findIndex(a => a.AssignmentNumber === number) === -1;
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-sm" style={{ width: '50%' }}>
        <div className="form-group">
          <label htmlFor="assignmentNumber">Assignment Number</label>
          <input type="number" className="form-control" id="assignmentNumber" value={assignment.AssignmentNumber} onChange={(event) => setAssignment({...assignment, AssignmentNumber: parseInt(event.target.value)})} required />
          {isNewAssignment && !isNewNumber(assignment.AssignmentNumber) && <div className="invalid-feedback">This assignment number is already in use.</div>}
        </div>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" className="form-control" id="title" value={assignment.Title} onChange={(event) => setAssignment({...assignment, Title: event.target.value})} required />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea className="form-control" id="description" rows="3" value={assignment.Description} onChange={(event) => setAssignment({...assignment, Description: event.target.value})} required></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="dueDate">Due Date</label>
          <input type="date" className="form-control" id="dueDate" value={assignment.DueDate} onChange={(event) => setAssignment({...assignment, DueDate: event.target.value})} required />
        </div>
        <div className="form-group">
          <label htmlFor="database-name" className="font-weight-bold">Database Name:</label>
          <select className="form-control" id="database-name" value={assignment.DatabaseName} onChange={e => setAssignment({ ...assignment, DatabaseName: e.target.value })}>
            <option value="">Select a database</option>
            {databases.map(database => (
              <option value={database} key={database}>{database}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          {isNewAssignment ?
            <button type="submit" className="btn btn-primary">Create Assignment</button> :
            <div>
              <button type="submit" className="btn btn-primary">Save Changes</button>
              <button type="button" className="btn btn-danger ml-2" onClick={handleCancelEdit}>Cancel</button>
            </div>
          }
        </div>
      </form>
      <div className="ml-4" style={{ width: '50%' }}>
        <h2>Assignments</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Assignment Number</th>
              <th>Title</th>
              <th>Description</th>
              <th>Due Date</th>
              <th>Database Name</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {assignments.map(a =>
              <tr key={a.AssignmentNumber}>
                <td>{a.AssignmentNumber}</td>
                <td>{a.Title}</td>
                <td>{a.Description}</td>
                <td>{a.DueDate}</td>
                <td>{a.DatabaseName}</td>
                <td>
                  <button type="button" className="btn btn-primary btn-sm mr-2" onClick={() => handleEdit(a)}>Edit</button>
                  <button type="button" className="btn btn-danger btn-sm" onClick={() => handleDelete(a)}>Delete</button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
  
      </div>
    </div>
  );
}

export default AssignmentForm;
