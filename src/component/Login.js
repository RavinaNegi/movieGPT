import React, { useRef, useState } from 'react'
import Header from './Header'
import isValidate from '../utils/isValidate';
import { auth } from '../utils/firebaseConfig';
import {createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import {  updateProfile } from "firebase/auth";
import { addUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';


const Login = () => {
  const [signup,setSignup]=useState(false);
  const [errorMessage,setErrorMessage]=useState(null);
  const dispatch=useDispatch();
 
  const email=useRef(null);
  const name=useRef(null);
  const password=useRef(null);
  //handleButton
  const handleButton=()=>{
    const message=isValidate(email.current.value,password.current.value);
    setErrorMessage(message);
    if(message) return;
    if(signup){
     createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
     .then((userCredential) => {
     // Signed up 
     const user = userCredential.user;
    

updateProfile(user, {
  displayName:name.current.value ,
   photoURL: "https://assets.nflxext.com/ffe/siteui/vlv3/f268d374-734d-474f-ad13-af5ba87ef9fc/web/IN-en-20250210-TRIFECTA-perspective_92338d5d-6ccd-4b1a-8536-eb2b0240a55e_small.jpg"
      
      }).then(() => {
        const {email,displayName,uid,photoURL}=auth.currentUser;
          dispatch(addUser({email:email,name:displayName,uid:uid,photoURL:photoURL}))

        
  // Profile updated!
  // ...
          }).catch((error) => {
            setErrorMessage(error.message)
  // An error occurred
  // ...
     });

    
    
    // ...
     })
     .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMessage(errorCode+"-"+errorMessage);
        // ..
      });
    }
    else{
    
     signInWithEmailAndPassword(auth, email.current.value,password.current.value)
       .then((userCredential) => {
    // Signed in 
         const user = userCredential.user;
         console.log("sign in");
       
          })
          .catch((error) => {
           const errorCode = error.code;
             const errorMessage = error.message;
            setErrorMessage(errorCode+"-"+errorMessage);
     });

    }
   

  }

  return (
    <div className='relative w-screen h-screen'>
        < Header/>
        
     <img className=' w-screen h-screen object-cover ' alt='logo'
      src='https://assets.nflxext.com/ffe/siteui/vlv3/f268d374-734d-474f-ad13-af5ba87ef9fc/web/IN-en-20250210-TRIFECTA-perspective_92338d5d-6ccd-4b1a-8536-eb2b0240a55e_small.jpg' />
     
     <form  onSubmit={(e)=>{e.preventDefault(e)}} className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-85 p-10 rounded-lg shadow-lg  text-center">
          <h2 className=" text-lg md:text-xl font-bold text-white mb-4">{signup ? "Sign Up": "Login"}</h2>
          {signup && <input
            type="text"
            ref={name}
            placeholder="Name"
            className="block w-64 sm:w-full p-2 mb-3 rounded-md border border-white bg-transparent text-white placeholder-gray-200"
          />}
          <input
            type="email"
            ref={email}
            placeholder="Email"
            className="block w-64 p-2 mb-3 rounded-md border border-white bg-transparent text-white placeholder-gray-200"
          />
          <input

            type="password"
            ref={password}
            placeholder="Password"
            className="block w-64 p-2 mb-3 rounded-md border border-white bg-transparent  text-white placeholder-gray-200"
          />
          <p className='text-red-600 text-lg font-bold text-start py-2'>{errorMessage}</p>
          <button onClick={handleButton} className="w-full bg-red-600 text-white py-2 rounded-md mt-3 hover:bg-red-700">
            {signup? "Sign Up": "Sign In"}
          </button>
          <p  onClick={()=>{setSignup(!signup)}} className=' text-white text-start mt-2 py-2 cursor-pointer'>{signup?"Already have account. Sign In":"New to Netflix? Sign Up Now" }</p>
        </form>
     
    </div>
  )
}

export default Login;
