import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home.jsx'
import Projetos from './Projetos.jsx'
import './index.css'
import {RouterProvider, createBrowserRouter} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/projetos",
    element: <Projetos />
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
