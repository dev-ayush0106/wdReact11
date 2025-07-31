import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import NotFound from './components/NotFound'

const Eight1 = () => {
    let router=createBrowserRouter([
        {
            path:"/",
            element:<Home/>
        },
        {
            path:"/about",
            element:<About/>
        },
        {
            path:"/service",
            element:<Services/>
        },
        {
            path:"/contact",
            element:<Contact/>
        },
        {
            path:"*",
            element:<NotFound/>
        }
    ])
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default Eight1
