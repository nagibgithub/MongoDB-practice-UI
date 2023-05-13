import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomeLayout from './layout/homeLayout.jsx';
import Users from './pages/Users.jsx';
import UserDetails from './pages/UserDetails.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/",
        element: <App></App>
      },
      {
        path: "/users",
        element: <Users></Users>,
        loader: () => fetch('http://localhost:3000/users')
      },
      {
        path: "/users/:id",
        element: <UserDetails></UserDetails>,
        loader: ({params}) => fetch(`http://localhost:3000/users/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
