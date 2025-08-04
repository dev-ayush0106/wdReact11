import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Ninth from './Ninth'
import ProductDetails from './ProductDetails'

const MainFile = () => {
    let routes=createBrowserRouter([
        {
            path:"/",
            element:<Ninth/>
        },
        {
            path:"/products/:id",
            element:<ProductDetails/>
        }
    ])
  return (
    <div>
      <RouterProvider router={routes}/>
    </div>
  )
}

export default MainFile
