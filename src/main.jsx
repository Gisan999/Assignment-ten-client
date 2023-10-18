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
import ErrorPage from './components/ErrorPage/ErrorPage';
import AuthProvider from './Provider/AuthProvider';
import BrandDetails from './components/BrandDetails/BrandDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: ()=> fetch('/brand.json')
      },
      {
        path: "/addItem",
        element: <AddProduct />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/registration",
        element: <Registration />
      },
      {
        path: '/brandDetails/:id',
        element: <BrandDetails/>,
        loader: ()=> fetch('/brand.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
