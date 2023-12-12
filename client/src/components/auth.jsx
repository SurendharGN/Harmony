import { auth, googleProvider } from "../config/firebase";
import { useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup} from "firebase/auth";
import { Link } from "react-router-dom";

export const Auth = () =>{

  const[email,setEmail]=useState("");
  const[passwd,setPasswd]=useState("");
  const[name,setName]=useState("");

  const createAccount = async() => {
    await createUserWithEmailAndPassword(auth,email,passwd);
  }

  
  const signinWithGoogle = async() => {
    await signInWithPopup(auth, googleProvider)
  }
  return(
    <div>
      <input placeholder="E-mail" onChange={(e)=>{setEmail(e.target.value)}}></input>

      <input type="password" placeholder="Passwd" onChange={(e)=>{setPasswd(e.target.value)}}></input>

      <input placeholder="Name" onChange={(e)=>{setName(e.target.value)}}></input>
      {/* {currentUser?.displayName} */}

      <button onClick={createAccount}>Create</button>

      <div>
        <button onClick={signinWithGoogle}>Google</button>
      </div>

      <div className="login">
        <p>Already have an account?</p>
        <Link to="/login">Login</Link>
      </div>
      
      {name?.displayName}
    </div>
  )
}