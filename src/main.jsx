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
import UpdateProduct from './components/UpdateProduct/UpdateProduct';
// import BrandCard from './components/BrandCard/BrandCard';
import AddBrand from './AddBrand/AddBrand';
import ProductDetails from './components/Products/ProductDetails';
import MyCart from './MyCart/MyCart';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch('http://localhost:5000/brand')
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
        element: <BrandDetails />,
        loader: ({params})=>fetch(`http://localhost:5000/brand/${params.id}`)
      },
      {
        path: "/products/:id",
        element: <ProductDetails />,
        loader: ({ params }) => fetch(`http://localhost:5000/product/${params.id}`)
      },
      {
        path: '/update/:id',
        element: <UpdateProduct />,
        loader: ({ params }) => fetch(`http://localhost:5000/product/${params.id}`)
      },
      {
        path:"/addBrand",
        element: <AddBrand></AddBrand>
      },
      {
        path: '/myCart',
        element: <MyCart/>,
        loader: ()=> fetch(`http://localhost:5000/cart`)
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
