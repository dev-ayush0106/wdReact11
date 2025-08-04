import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const Services = () => {
  let navigate=useNavigate();
  return (
    <div>
      <h1>Service Page</h1>
      <button onClick={()=>{navigate("java")}}>Navigate to Java</button>
      <button onClick={()=>{navigate("python")}}>Navigate to Python</button>
      <button onClick={()=>{navigate("mern")}}>Navigate to MERN</button>

      {/* For rendering all the child elements */}
      <Outlet/>
    </div>
  )
}

export default Services
