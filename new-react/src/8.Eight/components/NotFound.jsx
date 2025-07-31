import React from 'react'
import { useLocation } from 'react-router-dom'

const NotFound = () => {
    let loc=useLocation()
  return (
    <div>
      <h1>Page Not Exist</h1>
      <h2>Path:{loc.pathname}</h2>
    </div>
  )
}

export default NotFound
