import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faChalkboardTeacher, faUsers, faCalendarCheck, faFileAlt } from '@fortawesome/free-solid-svg-icons';
 import LessonsPage from './LessonsPage';
 import StudentsPage from './StudentsPage';
 import AssignmentsPage from './AssignmentsPage';
 import ReportsPage from './ReportsPage';

const TeacherDashboard = () => {
  const [currentScreen, setCurrentScreen] = useState('dashboard');

  const handleLessonClick = () => {
    setCurrentScreen('lessons');
  }

  const handleStudentClick = () => {
    setCurrentScreen('students');
  }

  const handleAssignmentClick = () => {
    setCurrentScreen('assignments');
  }

  const handleReportClick = () => {
    setCurrentScreen('reports');
  }

  let currentScreenComponent;
  switch (currentScreen){
    case 'dashboard':
      currentScreenComponent = (
        <div style={{ backgroundColor: '#f2f2f2', padding: '20px' }}>
          <h1 style={{ color: '#4d4d4d', fontWeight: 'bold' }}>
            <FontAwesomeIcon icon={faChalkboardTeacher} style={{ marginRight: '10px' }} />
            Teacher Dashboard
          </h1>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
            <div style={{ backgroundColor: '#6699cc', padding: '20px', flex: '1', color: '#fff', textAlign: 'center' }}>
              <FontAwesomeIcon icon={faBook} style={{ fontSize: '50px', marginBottom: '10px' }}
                onClick={handleLessonClick} />
              <h2>Lessons</h2>
              <p>Create and manage lessons</p>
              <button style={{ backgroundColor: '#fff', color: '#6699cc', border: 'none', padding: '10px 20px', borderRadius: '5px'}}>View Lessons</button>
              <button style={{ backgroundColor: '#fff', color: '#6699cc', border: 'none', padding: '10px 20px', borderRadius: '5px', marginLeft: '10px'}}>Create Lesson</button>
            </div>
            <div style={{ backgroundColor: '#66cc99', padding: '20px', flex: '1', color: '#fff', textAlign: 'center' }}>
              <FontAwesomeIcon icon={faUsers} style={{ fontSize: '50px', marginBottom: '10px' }}
                onClick={handleStudentClick} />
              <h2>Students</h2>
              <p>View and manage students</p>
              <button style={{ backgroundColor: '#fff', color: '#66cc99', border: 'none', padding: '10px 20px', borderRadius: '5px'}}>View Students</button>
              <button style={{ backgroundColor: '#fff', color: '#66cc99', border: 'none', padding: '10px 20px', borderRadius: '5px', marginLeft: '10px'}}>Add Student</button>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
            <div style={{ backgroundColor: '#99cc66', padding: '20px', flex: '1', color: '#fff', textAlign: 'center' }}>
              <FontAwesomeIcon icon={faCalendarCheck} style={{ fontSize: '50px', marginBottom: '10px' }}
                onClick={handleAssignmentClick} />
              <h2>Assignments</h2>
              <p>Create and view assignments</p>
              <button style={{ backgroundColor: '#fff', color: '#99cc66', border: 'none', padding: '10px 20px'}}>Create Assignment</button>
              <button style={{ backgroundColor: '#fff', color: '#99cc66', border: 'none', padding: '10px 20px', borderRadius: '5px', marginLeft: '10px'}}>View Assignment</button>
              </div>
              <div style={{ backgroundColor: '#cc9966', padding: '20px', flex: '1', color: '#fff', textAlign: 'center' }}>
                <FontAwesomeIcon icon={faFileAlt} style={{ fontSize: '50px', marginBottom: '10px' }}
                  onClick={handleReportClick} />
                <h2>Reports</h2>
                <p>View and generate reports</p>
                <button style={{ backgroundColor: '#fff', color: '#cc9966', border: 'none', padding: '10px 20px', borderRadius: '5px'}}>View Reports</button>
                <button style={{ backgroundColor: '#fff', color: '#cc9966', border: 'none', padding: '10px 20px', borderRadius: '5px', marginLeft: '10px'}}>Generate Report</button>
              </div>
            </div>
          </div>
        );
        break;
      case 'lessons':
        currentScreenComponent = <LessonsPage />;
        break;
      case 'students':
        currentScreenComponent = <StudentsPage />;
        break;
      case 'assignments':
        currentScreenComponent = <AssignmentsPage />;
        break;
      
      case 'reports':
        currentScreenComponent = <ReportsPage />;
        break;
      default:
        currentScreenComponent = <div>Invalid screen</div>;
    }
  
    return (
      <div>
        {currentScreenComponent}
      </div>
    )
  }
  
  export default TeacherDashboard;
    