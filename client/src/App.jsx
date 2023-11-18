import { useState } from 'react'

import './App.css';


import { Link } from 'react-router-dom';

function App() {
  const[app,setApp]=useState(0);


  return (
    <>
      <h1>Harmony</h1>
      <p>Authentication and authorization</p>
      
      <div className="auth">
        <h2>Signup/register</h2>
        <div id="register">
          
          {/* <Auth/> */}
          <Link className="signup" to="/createAccount">Create account</Link>
          
          <a className="signup">Guest</a>
        </div>

        <hr></hr>
      </div>

      <div className="auth">
        <h2>Login/sign-in</h2>

        <div id="login">
          <a className="signin">Your account</a>
          <a className="signin">Google</a>
          <a className="signin">Guest</a>
        </div>

        <hr></hr>
      </div>

      

      
      
      
      
      
    </>
  )
}

export default App
