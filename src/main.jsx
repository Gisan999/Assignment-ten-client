import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home';
import AddProduct from './components/AddProduct/AddProduct';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/addItem",
        element: <AddProduct/>
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/registration",
        element:<Registration/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>,
)
