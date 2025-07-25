import React, { useState } from 'react'

const Fourth1 = () => {
    let[status,setStatus]=useState(true);

    function update(){
        setStatus(!status);
    }
  return (
    <div>
      {/* conditional rendering */}
      {/* Ternary operator 
            (condition)?statement 1 if true : statement 2 if false
      */}

      {
        (status)?<h1>That useState is True.</h1>:<h1>That useState is False.</h1>
      }

      <button onClick={update}>Update {(status)?"False":"True"}</button>
      
      
    </div>
  )
}

export default Fourth1
