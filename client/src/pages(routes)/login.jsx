import { auth, googleProvider } from "../config/firebase";
import { useState,useEffect } from "react";
import { useUserAuth } from "../context/userAuthContext.";

export const Login = () =>{

  const[email,setEmail]=useState("");
  const[passwd,setPasswd]=useState("");

  const {login,signinWithGoogle,signout}=useUserAuth();

  // onAuthStateChanged(auth,user=>{
  //     console.log(user)
  //     if(user){
  //       window.location="/homepage"; 
  //     }
  //   });

  const handleGoogleLogin=async(e)=>{
    e.preventDefault();
    await signinWithGoogle();
  }

  const handleLogin=async(e)=>{
    e.preventDefault();
    await login(email,passwd)
  }

  const handleLogout=async(e)=>{
    e.preventDefault();
    await signout();
  }
  
  return(
    <div>

      <input placeholder="E-mail" onChange={(e)=>{setEmail(e.target.value)}}></input>

      <input type="password" placeholder="Passwd" onChange={(e)=>{setPasswd(e.target.value)}}></input>

      <button onClick={handleLogin}>Login</button>

      <div>
        <button onClick={handleGoogleLogin}>Google</button>
      </div>

      <div>
        <button onClick={handleLogout}>Sign out</button>
      </div>
    </div>
  )
}


