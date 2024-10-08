import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './routes/Home'
import Create from './routes/Create'
import Delete from './routes/Delete'
import Read from './routes/Read'
import Update from './routes/Update'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/create",
    element: <Create />
  },
  {
    path: "/read/:id",
    element: <Read />
  },
  {
    path: "/update/:id",
    element: <Update />
  },
  {
    path: "/delete/:id",
    element: <Delete />
  },
 
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
