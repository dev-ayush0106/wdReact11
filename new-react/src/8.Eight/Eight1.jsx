import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import NotFound from './components/NotFound'
import Navbar from './Navbar'
import Java from './components/Children/Java'
import Python from './components/Children/Python'
import Mern from './components/Children/Mern'
import StudentDetail from './components/StudentDetail'

const Eight1 = () => {
    let router=createBrowserRouter([
        {
            path:"/",
            element:<>
            <Navbar/>
            <Home/>
            </>
        },
        {
            path:"/about",
            element:
            <>
            <Navbar/>
            <About/>
            </>
        },
        {
            path:"/service",
            element:
            <>
            <Navbar/><Services/>
            </>,
            children:[
                {
                    path:"java",
                    element:<Java/>
                },
                {
                    path:"python",
                    element:<Python/>
                },
                {
                    path:"mern",
                    element:<Mern/>
                }
            ]
        },
        {
            path:"/contact",
            element:
            <>
            <Navbar/>
            <Contact/>
            </>
        },
        {
            path:"/student/:id",
            element:<StudentDetail/>
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
