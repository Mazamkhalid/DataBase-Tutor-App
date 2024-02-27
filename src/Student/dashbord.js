import React from 'react';
//import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router,Route,Routes,Link,useNavigate } from "react-router-dom";
const StudentHome = () => {
  
    
  return (
    <div>
      <h1 style={{textAlign: "center",marginTop:30}}>Student Home Dashboard</h1>
      <br>
      </br>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Assignments Solutions</h5>
                <p className="card-text">
                  View your  Assignments Solutions That you submit for Grading.
                </p>
                <a href="/asssol" className="btn btn-primary">
                  Go to Assignments Solutions
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">My Assignments</h5>
                <p className="card-text">
                  View your assignments and submit them for grading.
                </p>
                <a href="/assignmentlist" className="btn btn-primary">
                  Go to My Assignments
                </a>
              </div>
            </div>
          </div>
          <div style={{marginTop:40}}></div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">My Grades</h5>
                <p className="card-text">
                  View your grades and track your progress.
                </p>
                <a href="/grades" className="btn btn-primary">
                  Go to My Grades
                </a>
              </div>
            </div>

          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Practice</h5>
                <p className="card-text">
                  Practice of Your DataBase Course Query .
                </p>
                <a href="/treeview" className="btn btn-primary">
                  Go to DATABASE
                </a>
              </div>
            </div>
          </div>
          <div style={{marginTop:40,marginLeft:300,marginRight:50}}>
          <div className="col-md-5" style={{textAlign: "center",justifyContent: "center",marginleft:20}}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Tutorial</h5>
                <p className="card-text">
                  View DataBase Course Tutorial For Learning Course More Effectly.
                </p>
                <a href="/tutorial" className="btn btn-primary">
                  Go to Tutorial
                </a>
                
                {/* <Link to ='/home'>click</Link>
                <Link to ='/assignmentlist'>click</Link> */}
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentHome;