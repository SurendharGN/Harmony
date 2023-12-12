import { auth, googleProvider } from "../config/firebase";
import { useState,useEffect } from "react";
import { onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup,signOut} from "firebase/auth";

export const Login = () =>{

  const[email,setEmail]=useState("");
  const[passwd,setPasswd]=useState("");

  const signout=async()=>{
    await signOut(auth);
  };
  const login = async() => {
    await signInWithEmailAndPassword(auth,email,passwd);
  }

  const signinWithGoogle = async() => {
    await signInWithPopup(auth, googleProvider);
  }

  onAuthStateChanged(auth,user=>{
      console.log(user)
      if(user){
        window.location="/homepage"; 
      }
    });
  
  return(
    <div>

      <input placeholder="E-mail" onChange={(e)=>{setEmail(e.target.value)}}></input>

      <input type="password" placeholder="Passwd" onChange={(e)=>{setPasswd(e.target.value)}}></input>

      <button onClick={login}>Login</button>

      <div>
        <button onClick={signinWithGoogle}>Google</button>
      </div>

      <div>
        <button onClick={signout}>Sign out</button>
      </div>
    </div>
  )
}


