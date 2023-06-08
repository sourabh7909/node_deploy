import React, { useState } from 'react'
import { json } from 'react-router-dom'

const Notes = () => {
    const [title,settitle]=useState("")
    const [body,setbody]=useState("")
    const [category,setcategory]=useState("")

    const handlesubmit=()=>{
        // console.log(JSON.parse(localStorage.getItem("token")))
        const payload={
            title,
            body,
            category
        }
      fetch("http://localhost:4500/notes/create",{
        method:"POST",
        headers:{
            "Content-type":"application/json",
            authorization:`Bearer ${localStorage.getItem("token")}`
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
        settitle("")
        setbody("")
        setcategory("")
    }
  return (
    <div>
        <h1>Registration Form</h1>
       <input style={{width:"20%",height:"30px"}} type="text" placeholder='title' value={title} onChange={(e)=>settitle(e.target.value)}/>
       <br></br>
       <input style={{width:"20%",height:"30px"}} type="text" placeholder='body' value={body} onChange={(e)=>setbody(e.target.value)}/>
       <br></br>
       <input style={{width:"20%",height:"30px"}} type="text" placeholder='category' value={category} onChange={(e)=>setcategory(e.target.value)}/>
       <br></br>
       <button style={{width:"20%",height:"30px",color:"white",backgroundColor:"black",marginTop:"10px"}} onClick={handlesubmit}>Sign up!</button>
    </div>
  )
}

export default Notes