import { Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import './index.css'
import MainLayout from './layout/MainLayout';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children:[
    ]
  },
  {
    path: "/home",
    element: <div>this is home</div>,
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
