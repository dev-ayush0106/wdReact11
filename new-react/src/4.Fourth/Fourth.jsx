import React, { useState } from 'react'

const Fourth = () => {
    let[count,setCount]=useState(0);
    console.log(count);

    function incCount(){
        setCount(count+1);
    }
    function decCount(){
        setCount(count-1);
    }
  return (
    <div>
    {/* What is Hooks?
        to perform any high-end task in small procedure is known as hook.
    */}
      {/* state managment :  useState()*/}

      {/* useState syntax:
            let[state,setState]=useState(value)
      */}

      <button onClick={incCount}>+</button>
        <span>{count}</span>
      <button onClick={decCount}>-</button>
    </div>
  )
}

export default Fourth
