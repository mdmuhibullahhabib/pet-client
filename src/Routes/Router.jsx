import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from '../Pages/Home.jsx/Home'
import Main from '../Layouts/Main'

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            }
        ]
    }
])

export default Router