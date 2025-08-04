import React from 'react'
import { useParams } from 'react-router-dom'

const StudentDetail = () => {
    let {id}=useParams();
  return (
    <div>
      <h1>Student Details : {id} </h1>
    </div>
  )
}

export default StudentDetail