import React, { useState } from 'react'
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import "./fourth.css";

const Fourth2 = () => {
    let [current,setCurrent]=useState(false);
    function update(){
        setCurrent(!current);
    }
  return (
    <div>
      <FaHeart onClick={update} className={(current)?"active":""} style={{fontSize:"2rem"}}/>
    </div>
  )
}

export default Fourth2
