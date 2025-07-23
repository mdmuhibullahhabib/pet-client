import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './Routes/Router.jsx'
// import Authprovider from './Authprovider/Authprovider.jsx'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
        {/* <Authprovider> */}
      <QueryClientProvider client={queryClient}>
    <div className="max--screen-xl mx-auto">
      <RouterProvider router={Router}></RouterProvider>
    </div>
    </QueryClientProvider>
    {/* </Authprovider> */}
  </StrictMode>,
)
