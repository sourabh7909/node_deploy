import React, { useState } from 'react'

const Login = () => {
   
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")

    const handlesubmit=()=>{
        const payload={
            email,
            password
        }
      fetch("http://localhost:4500/users/login",{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify(payload)
      })
      .then((res)=>res.json())
      .then((res)=>{
        console.log(res)
        localStorage.setItem("token",(res.token))
      })
      .catch((err)=>{
        console.log(err)
      })
        setemail("")
        setpassword("")
    }
  return (
    <div>
        <h1>Login Form</h1>
       <input style={{width:"20%",height:"30px"}} type="text" placeholder='email' value={email} onChange={(e)=>setemail(e.target.value)}/>
       <br></br>
       <input style={{width:"20%",height:"30px"}} type="password" placeholder='password' value={password} onChange={(e)=>setpassword(e.target.value)}/>
       <br></br>
       <button style={{width:"20%",height:"30px",color:"white",backgroundColor:"red",marginTop:"10px"}} onClick={handlesubmit}>Sign up!</button>
    </div>
  )
}

export default Login