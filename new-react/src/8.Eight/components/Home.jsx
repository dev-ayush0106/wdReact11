import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  let [inpvalue,setInpValue]=useState("")
  let navigate=useNavigate();

  function moveToStudent(){
    navigate(`/student/${inpvalue}`);
  }
  return (
    <div>
      <h1>Home Page</h1>

      <input type="text" value={inpvalue} onChange={(e)=>{setInpValue(e.target.value)}} />
      <button onClick={moveToStudent}>Search</button>
    </div>
  )
}

export default Home
