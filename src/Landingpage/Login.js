
import React, { useState,useContext } from 'react';
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import axios from "axios";

import useHistory from 'use-history';
import { SessionContext } from '../SessionContext';
function App() {
    const iconSize = 60;
    const styles = {
        width: `${iconSize}px`,
        height: `${iconSize}px`,
        marginLeft:1
      };
      const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  //const history = useHistory();
  //const session = useContext(SessionContext);
//   const handleSubmit1 = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.get(
//         `http://192.168.18.65/FYPAPI/api/Student/Login?Semail=${email}&Spassword=${password}`
//       );
//       setMessage(response.data);
//     } catch (error) {
//       setMessage("Invalid email or password.");
//     }
//   };
//   const handleSubmit2 = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.get(
//         `http://192.168.18.65/FYPAPI/api/Teacher/Login?Temail=${email}&Tpassword=${password}`
//       );
//       setMessage(response.data);
//     } catch (error) {
//       setMessage("Invalid email or password.");
//     }
//   };
const handleSubmit = (e) => {
    e.preventDefault();
    if (loginType === "student") {
      handleSubmit1();
    } else if (loginType === "teacher") {
      handleSubmit2();
    }
  };

  const handleSubmit1 = async () => {
    try {
      const response = await axios.get(
        `http://localhost/FYPAPI/api/Student/Login?Semail=${email}&Spassword=${password}`
      );
      setMessage(response.data);
       if (response.data === "Successfully LogIn") {
      //   sessionStorage.setItem("loggedIn", true);
      //   sessionStorage.setItem("email", email);
      //   history.push("/dashbord");
      // } else {
      //   setMessage("Invalid email or password.");
      window.location.href = "/dashbord";
       }
    } catch (error) {
      setMessage("Invalid email or password.");
    }
  };

  const handleSubmit2 = async () => {
    try {
      const response = await axios.get(
        `http://localhost/FYPAPI/api/Teacher/Login?Temail=${email}&Tpassword=${password}`
      );
      setMessage(response.data);
       if (response.data === "Successfully LogIn") {
      //   sessionStorage.setItem("loggedIn", true);
      //   sessionStorage.setItem("email", email);
      //   history.push("/Tdashbord");
      // } else {
      //   setMessage("Invalid email or password.");
      window.location.href = "/Tdashbord";
       }
    } catch (error) {
      setMessage("Invalid email or password.");
    }
  };

    const [loginType, setLoginType] = useState('');
    
  return (
    <MDBContainer fluid className="p-3 my-5 h-custom">

      <MDBRow>

        <MDBCol col='10' md='6'>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="Sample image" />
        </MDBCol>

        <MDBCol col='4' md='6'>

          <div className="d-flex flex-row align-items-center justify-content-center">

           
            <div style={{marginLeft:10}}>
          <label> 
            <img src="/57_Student.jpg" alt="My Image" style={styles} onClick={() => setLoginType('student')}/>
            <br/>
            Student 
            </label>
            </div>
            <div>
            <label style={{marginLeft:30}}> 
            <img src="/images.png" alt="My Image" style={styles} onClick={() => setLoginType('teacher')}/>
            <br/>
              Teacher
            </label>
            </div>

          </div>
          {/* {session.isLoggedIn ? (
        <Redirect to="/dashboard" />
      ) : (
        <form onSubmit={handleSubmit}>
          // form fields here
        </form>
      )} */}
          <form onSubmit={handleSubmit}>
          <div className="divider d-flex align-items-center my-4">
          {loginType === 'student' ? <p className="lead fw-normal mb-0 me-3">STUDENT LOG-IN</p> : loginType === 'teacher' ? <p className="lead fw-normal mb-0 me-3">TEACHER LOG-IN</p> : <p className="lead fw-normal mb-0 me-3">SELECT LOG-IN TYPE</p> }

            <p className="text-center fw-bold mx-3 mb-0"></p>
          </div>
          <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg"
          value={email} onChange={(e) => setEmail(e.target.value)}/>
          <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"
          value={password} onChange={(e) => setPassword(e.target.value)}/>

          <div className="d-flex justify-content-between mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <a href="!#">Forgot password?</a>
          </div>

          <div className='text-center text-md-start mt-2 pt-2'>
            <button className="mb-0 px-5 btn btn-primary text-white" type="submit">Login</button>
            {message === "Successfully LogIn" ? (
  <p style={{ color: "green" }}>{message}</p>
) : (
  <p style={{ color: "red" }}>{message}</p>
)}
            <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <a href="#!" className="link-danger">Register</a></p>
          </div>
          </form>
        </MDBCol>

      </MDBRow>

    

    </MDBContainer>
  );
}

export default App;
