import { auth, googleProvider } from "../config/firebase";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useUserAuth } from "../context/userAuthContext.";

export const Auth = () =>{

  const[email,setEmail]=useState("");
  const[passwd,setPasswd]=useState("");
  const[name,setName]=useState("");

  const {signinWithGoogle}=useUserAuth();
  const {createAccount}=useUserAuth();

  

  // const handleSubmit=async(e)=>{
  //   e.preventDefault();
    

  // }
  const handleGoggleSignUp=async(e)=>{
    e.preventDefault();
    await signinWithGoogle();
  }

  const handleCreateAccount=async(e)=>{
    e.preventDefault();
    await createAccount(email,passwd)
  }
  return(
    <form >
      <input placeholder="E-mail" onChange={(e)=>{setEmail(e.target.value)}}></input>

      <input type="password" placeholder="Passwd" onChange={(e)=>{setPasswd(e.target.value)}}></input>

      <input placeholder="Name" onChange={(e)=>{setName(e.target.value)}}></input>
      {/* {currentUser?.displayName} */}

      <button onClick={handleCreateAccount}>Create</button>

      <div>
        <button onClick={handleGoggleSignUp}>Google</button>
      </div>

      <div className="login">
        <p>Already have an account?</p>
        <Link to="/login">Login</Link>
      </div>
      
      {name?.displayName}
    </form>
  )
}