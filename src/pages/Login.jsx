import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
   const [email,setMail]=useState("")
  const[password,setPassword]=useState("")
  const handlesubmit=(e)=>{
    e.preventDefault()
  }
  return (
    <div>
      <div>
<form action="" onSubmit={handlesubmit} >
  <div>
  <input onChange={(e)=>setMail(e.target)}/>
  </div>
   <div>
   <input onChange={(e)=>setPassword(e.target)} />
   </div>
     
      <button >Submit</button>
      </form>

      </div>

    </div>
  );
};

export default Login;
