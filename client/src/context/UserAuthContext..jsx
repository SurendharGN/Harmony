import { useContext,createContext } from "react";
import { auth, googleProvider } from "../config/firebase";
import { useEffect, useState } from "react";
import { onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup,signOut,createUserWithEmailAndPassword} from "firebase/auth";

const userAuthContext = createContext();

// eslint-disable-next-line react/prop-types
export function UserAuthContextProvider(){
  const [user,setUser]=useState({})

  const createAccount = (email,passwd) => {
    return createUserWithEmailAndPassword(auth,email,passwd);
  }
  
  const signinWithGoogle = () => {
    return signInWithPopup(auth, googleProvider)
  }

  const login = (email,passwd) => {
    return signInWithEmailAndPassword(auth,email,passwd);
  }

  const signout=async()=>{
    await signOut(auth);
  };

  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
      setUser(currentUser)

    });
    return ()=>{
      unsubscribe();
    }

  }
  ,[])
  return (
    
    <userAuthContext.Provider value={{user,signout,login,signinWithGoogle,createAccount}}></userAuthContext.Provider>
  )
}

export function useUserAuth(){
  return useContext(userAuthContext)
}