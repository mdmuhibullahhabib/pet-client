import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from '../Pages/Home.jsx/Home'
import Main from '../Layouts/Main'
import Shop from '../Pages/Shop'
import Contact from '../Pages/Contact'

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/shop',
                element: <Shop></Shop>,
            },
            {
                path: '/contact',
                element: <Contact></Contact>,
            },
        ]
    }
])

export default Router