import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router/dom";
import './index.css'
import { router } from './router/Router';
import BookProvider from './context/BookProvider';
import { ToastContainer } from 'react-toastify';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BookProvider>
    <RouterProvider router={router} />
    <ToastContainer />
    </BookProvider>
  </StrictMode>,
)
