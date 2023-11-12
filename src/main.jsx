import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Component/Root.jsx';
import Home from './Component/Home.jsx';
import Products from './Component/Products.jsx';
import Dashboard from './Component/Dashboard.jsx';
import Product from './Component/Product.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:"/",
        element:<Home></Home>

      },
      {
        path:"/products",
        element:<Products></Products>,
        loader:()=>fetch('https://dummyjson.com/products')
      },
      {
        path:"/product/:id",
        element:<Product></Product>,
        loader:({params})=>fetch(`https://dummyjson.com/products/${params.id}`)

      },
      {
        path:"/dashboard",
        element:<Dashboard></Dashboard>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
