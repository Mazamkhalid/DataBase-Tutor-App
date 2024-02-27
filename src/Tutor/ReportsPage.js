import React, { Component } from "react";

class Report extends Component {
  constructor(props) {
    super(props);

    this.state = {
      students: [
        {
            SID:"1",
          name: "John Doe",
          class: "Class 5A",
          score: "75%",
          Attendance:"75%"

        },
        {
            SID:"2",
          name: "Jill Doe",
          class: "Class 4A",
          score: "87%",
          Attendance:"75%"
        },
        {
            SID:"3",
          name: "Jack Doe",
          class: "Class 6A",
          score: "95%",
          Attendance:"75%"
        },
        
      ]
    }
  }

  render() {
    const { students } = this.state;
    return (
      <div className="report-container" style={{ backgroundColor: '#e1f5fe', padding: '20px'}}>
        <h1 style={{color: '#00adef', fontSize: '2rem', fontWeight: 'bold'}}>Student Report</h1>
        <table className="report-table" style={{border: '2px solid #01579b', padding: '10px',marginTop:50,marginLeft:400}}>
          <thead style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
            <tr>
            <th style={{padding: '10px', backgroundColor: '#01579b', color: '#ffffff'}}>Student ID</th>
              <th style={{padding: '10px', backgroundColor: '#01579b', color: '#ffffff'}}>Name</th>
              <th style={{padding: '10px', backgroundColor: '#01579b', color: '#ffffff'}}>Class</th>
              <th style={{padding: '10px', backgroundColor: '#01579b', color: '#ffffff'}}>Score</th>
              <th style={{padding: '10px', backgroundColor: '#01579b', color: '#ffffff'}}>Attendance</th>

            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <td style={{padding: '10px', backgroundColor: '#ffffff'}}>{student.SID}</td>
                <td style={{padding: '10px', backgroundColor: '#ffffff'}}>{student.name}</td>
                <td style={{padding: '10px', backgroundColor: '#ffffff'}}>{student.class}</td>
                <td style={{padding: '10px', backgroundColor: '#ffffff'}}>{student.score}</td>
                <td style={{padding: '10px', backgroundColor: '#ffffff'}}>{student.Attendance}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <br>
        </br>
        <a href="/Tdashbord" className="btn btn-primary" >
                  Go to Back
                </a>
      </div>
    );
  }
}

export default Report;