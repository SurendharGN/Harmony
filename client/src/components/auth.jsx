import { auth, googleProvider } from "../firebase";
import { useState } from "react";
import { createUserWithEmailAndPassword, signInWithPopup} from "firebase/auth";

export const Auth = () =>{

  const[email,setEmail]=useState("");
  const[passwd,setPasswd]=useState("");

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

      <button onClick={createAccount}>Create</button>

      <div>
        <button onClick={signinWithGoogle}>Google</button>
      </div>

    </div>
  )
}