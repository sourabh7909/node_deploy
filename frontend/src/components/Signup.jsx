import React, { useState } from 'react'
import { json } from 'react-router-dom'

const Signup = () => {
    const [name,setname]=useState("")
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")

    const handlesubmit=()=>{
        const payload={
            name,
            email,
            password
        }
      fetch("http://localhost:4500/users/register",{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify(payload)
      })
      .then((res)=>res.json())
      .then((res)=>{
        console.log(res)
      })
      .catch((err)=>{
        console.log(err)
      })
        setname("")
        setemail("")
        setpassword("")
    }
  return (
    <div>
        <h1>Registration Form</h1>
       <input style={{width:"20%",height:"30px"}} type="text" placeholder='name' value={name} onChange={(e)=>setname(e.target.value)}/>
       <br></br>
       <input style={{width:"20%",height:"30px"}} type="text" placeholder='email' value={email} onChange={(e)=>setemail(e.target.value)}/>
       <br></br>
       <input style={{width:"20%",height:"30px"}} type="password" placeholder='password' value={password} onChange={(e)=>setpassword(e.target.value)}/>
       <br></br>
       <button style={{width:"20%",height:"30px",color:"white",backgroundColor:"black",marginTop:"10px"}} onClick={handlesubmit}>Sign up!</button>
    </div>
  )
}

export default Signup