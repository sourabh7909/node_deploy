import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const Update = () => {
const {userID}=useParams()
console.log(userID)
const [title,settile]=useState("")
const [body,setbody]=useState("")
const [category,setcategory]=useState("")
    useEffect(()=>{
        fetch(`http://localhost:4500/notes/${userID}`,{
            method:"GET",
            headers:{
                "Content-Type":"Application/json",
                authorization:`Bearer ${localStorage.getItem("token")}`
            }
        })
        .then((req)=>req.json())
          .then((res)=>{
           console.log(res)
          })
          .catch((err)=>{
            console.log(err)
          })
    },[])
    return (
        <div>
            <h1>update notes</h1>
            <input style={{ width: "20%", height: "30px" }} type="text" placeholder='update title' value={title}/>
            <br></br>
            <input style={{ width: "20%", height: "30px" }} type="text" placeholder='update body' value={body}/>
            <br></br>
            <input style={{ width: "20%", height: "30px" }} type="password" placeholder='update category' value={category}/>
            <br></br>
            <button style={{ width: "20%", height: "30px", color: "white", backgroundColor: "black", marginTop: "10px" }} >update notes</button>
        </div>
    )
}

export default Update