import { auth, googleProvider } from "../config/firebase";
import { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup} from "firebase/auth";

export const Login = () =>{

  const[email,setEmail]=useState("");
  const[passwd,setPasswd]=useState("");

  const login = async() => {
    await signInWithEmailAndPassword(auth,email,passwd);
  }

  const signinWithGoogle = async() => {
    await signInWithPopup(auth, googleProvider)
  }
  return(
    <div>

      <input placeholder="E-mail" onChange={(e)=>{setEmail(e.target.value)}}></input>

      <input type="password" placeholder="Passwd" onChange={(e)=>{setPasswd(e.target.value)}}></input>

      <button onClick={login}>Login</button>

      <div>
        <button onClick={signinWithGoogle}>Google</button>
      </div>

    </div>
  )
}


