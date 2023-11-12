import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  return (
    <>
      <h1>Harmony</h1>
      <p>Authentication and authorization</p>
      
      <div className="auth">
        <h2>Signup/register</h2>
        

        <div id="register">
          <a className="signup">Account</a>
          <a className="signup">Google</a>
          <a className="signup">Guest</a>
        </div>

        <hr></hr>
      </div>

      <div className="auth">
        <h2>Login/sign-in</h2>

        <div id="login">
          <a className="signin">Account</a>
          <a className="signin">Google</a>
          <a className="signin">Guest</a>
        </div>

        <hr></hr>
      </div>

      

      
      
      
      
      
    </>
  )
}

export default App
