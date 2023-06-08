import React, { useEffect, useState } from 'react'

const Allnotes = () => {
    const [notes,setnotes]=useState([])
    useEffect(()=>{
        fetch("http://localhost:4500/notes",{
            method:"GET",
            headers:{
                "Content-Type":"Application/json",
                authorization:`Bearer ${localStorage.getItem("token")}`
            }
        })
        .then((req)=>req.json())
          .then((res)=>{
            console.log(res)
            setnotes(res.notes)
          })
          .catch((err)=>{
            console.log(err)
          })

    },[])
    const handleDelete=(id)=>{
      fetch(`http://localhost:4500/notes/delete/${id}`,{
        method:"DELETE",
        headers:{
            "Content-Type":"Application/json",
            authorization:`Bearer ${localStorage.getItem("token")}`
        }
      })
      .then((res)=>res.json())
      .then((res)=>{
        console.log(res)
      })
      window.location.reload()
    }
  return (
    <div>
        <h1>All Notes present here</h1>
      {notes.map((el)=>{
       return <div style={{border:"1px solid black",margin:"10px"}} key={el._id}>
           <h1>{el.title}</h1>
           <h2>{el.body}</h2>
           <h3>{el.category}</h3>
           <h4>{el.user}</h4>
           <h5>{el.userID}</h5>
           <button onClick={()=>handleDelete(el._id)}>Delete</button>
           <button><a href={`/update/${el._id}`}>Update</a></button>
        </div>
      })}
    </div>
  )
}

export default Allnotes