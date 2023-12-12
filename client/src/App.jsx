// import { useState } from 'react'


// Importing components
import { Navbar } from './components/navbar';

// Importing styles
import './App.css';



// Importing packages
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {Helmet} from "react-helmet";
// import { useEffect } from 'react';

function App() {
  // const[app,setApp]=useState(0);
  // const location=useLocation();
  const navigate=useNavigate();
  const navigator = () => {
    navigate("/")

  }

  return (
    <>
      <Helmet>
        <title>Harmony: a luxury attire</title>
        <meta charset="UTF-8"/>
        <meta name="description" content="A thrift shop based on Indian attires."/>
        <meta name="author" content="Surendhar"/>
        <meta name="keywords" content="dresses," />
        < meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Helmet>
      <h1 onClick={navigator}>Harmony</h1>

      {/* <Navbar/> */}
      <hr></hr>
      
      <div className="auth">
        <h2>Signup/register</h2>
        <div id="register">
          {/* <Auth/> */}
          <Link className="signup" to="/createAccount">Create account</Link>
          
          <Link className="signup" to="/homepage">Guest</Link>
        </div>

        <hr></hr>
      </div>

      <div className="auth">
        <h2>Login/sign-in</h2>

        <div id="login">
          <Link className="signin" to="/login">Your account</Link>
          <Link className="signin" to="/homepage">Guest</Link>
        </div>

        <hr></hr>
      </div>

      

      
      
      
      
      
    </>
  )
}

export default App
