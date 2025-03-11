import React from 'react'
import { useNavigate } from 'react-router-dom';
 import {signOut } from "firebase/auth";
 import { auth } from '../utils/firebaseConfig';
import { useSelector } from 'react-redux';
import {  onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { useEffect } from 'react';
import { addtoggle } from '../utils/gptSlice';
import { language } from '../utils/langConstant';
import { addlanguage } from '../utils/configSlice';
 

const Header = () => {
  const navigate=useNavigate();
  const user = useSelector((store)=>store.user);
  const dispatch=useDispatch();
  const gpt=useSelector((store)=>store.gpt.toggleValue)
 
  useEffect(() => {
    const unsuscribe=onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(addUser({
          email: user.email,
          name: user.displayName,
          uid: user.uid,
          photoURL: user.photoURL
        }));
        navigate("/browser");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return ()=>unsuscribe();
  }, []);
  const toggleGPT=()=>{
    dispatch(addtoggle())

  }
  
  const handleClick=()=>
    {
      signOut(auth).then(() => {
        console.log("sign out")
        navigate("/")
  
        // Sign-out successful.
      }).catch((error) => {
        
        
        // An error happened.
      });
    }
    const handleLang=(e)=>
    {
      console.log("lad",e.target.value)
      dispatch(addlanguage(e.target.value));
    }
  return (
    <div className='absolute flex-col bg-gradient-to-b from-black w-full md:flex sm:flex-row justify-between z-10'> 
         
        <img className='ml-2 sm-ml-4 md-ml-4 w-28 md:w-48 h-auto' alt='logo'
         src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"/>
        <div className='flex'>
         
        { user && <div className='flex justify-between  m-auto p-1 md:p-3'>
         {gpt && <select onChange={handleLang}  className='  sm:p-0 m-0 md-m-0 py-0 rounded-lg bg-black text-white'>
            {
              language.map((l)=><option className='sm:p-0 py-0 m-0 md-m-0 rounded-lg  bg-black text-white' mkey={l.identifier} value={l.identifier}>{l.name}</option>)

            }
         
          </select>
}
          <button onClick={toggleGPT} className='bg-blue-600 text-white rounded-lg h-10 p-2 m-4  '>{gpt?"back":"GPT Search"}</button>
          <img className='hidden sm:block  h-14 w-14' alt='profile-logo' src={user.photoURL}/>
          <button onClick={handleClick} className='bg-red-700 text-white rounded-lg p-2 m-4  '>sign out</button>
        </div>}
        
</div>
      
    </div>
  )
}

export default Header
