import React from 'react'
import Header from './Header';
import { useState } from 'react';

const Login = () => {
  
    const [IsSignForm,setIsSignForm]=useState(true);
     
    const toggleform=()=>{
      setIsSignForm(!IsSignForm);
    };
  
  return (
    
    <div>
        <Header/>
        <div className="absolute">
        <img 
        src="https://assets.nflxext.com/ffe/siteui/vlv3/2e07bc25-8b8f-4531-8e1f-7e5e33938793/e4b3c14a-684b-4fc4-b14f-2b486a4e9f4e/IN-en-20240219-popsignuptwoweeks-perspective_alpha_website_medium.jpg"/>
        </div>
        <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
          <h1 className="text-3xl p-3 ">{!IsSignForm ? "Sign Up" : "Sign In"}</h1>
           {!IsSignForm && <input 
            placeholder="Full Name"
            className="p-4 m-4 w-full bg-gray-700 rounded-lg"></input>}
            <input 
            placeholder="Email address"
            className="p-4 m-4 w-full bg-gray-700 rounded-lg"></input>
            <input 
            className="p-4 m-4 w-full bg-gray-700 rounded-lg"
            placeholder="Password"></input>
            <button className="w-full p-4 m-4 bg-red-700 rounded-lg">{!IsSignForm ? "Sign Up" : "Sign In" }</button>
            <p className="py-4 cursor-pointer"  onClick={toggleform}>{!IsSignForm ? "Already a user,just Sign In" : "New to Netflix,Sign Up" } </p>
        </form>
    </div>
  )
}

export default Login;
