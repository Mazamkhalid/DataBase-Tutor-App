import React from 'react';

const AssignmentResults = () => {

  const results = [    { student: '19-Arid-2999', assignment: 'DBMS', grade: 'A' },
      { student: '19-Arid-2999', assignment: 'DB', grade: 'B' },
          { student: '19-Arid-2999', assignment: 'DataBase', grade: 'C' }, 
             { student: '19-Arid-2999', assignment: 'Database', grade: 'A' }, 
             
             { student: '19-Arid-2999', assignment: 'DBMS', grade: 'A' },
      { student: '19-Arid-2999', assignment: 'DB', grade: 'B' },
          { student: '19-Arid-2999', assignment: 'DataBase', grade: 'C' }, 
             { student: '19-Arid-2999', assignment: 'Database', grade: 'A' },];

  return (
    <div>
      <h1 style={{textAlign: 'center', color: '#3F51B5', backgroundColor:'#F5F5F5'}}>Assignment Results</h1>
      <table style={{width: '70%', margin: '0 auto', borderCollapse: 'collapse', backgroundColor:'#F5F5F5'}}>
        <thead>
          <tr style={{backgroundColor: '#3F51B5', color: 'white'}}>
            <th style={{border: '1px solid #ddd', padding: '8px'}}>Student</th>
            <th style={{border: '1px solid #ddd', padding: '8px'}}>Assignment</th>
            <th style={{border: '1px solid #ddd', padding: '8px'}}>Grade</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result, index) => (
            <tr key={index} style={{backgroundColor: index % 2 === 0 ? '#f2f2f2' : 'white'}}>
              <td style={{border: '1px solid #ddd', padding: '8px'}}>{result.student}</td>
              <td style={{border: '1px solid #ddd', padding: '8px'}}>{result.assignment}</td>
              <td style={{border: '1px solid #ddd', padding: '8px'}}>{result.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AssignmentResults;
