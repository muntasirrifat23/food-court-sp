import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Main from './Component/Main/Main.jsx';
import Home from './Component/Home/Home.jsx';
import Login from './Component/Login/Login.jsx';
import Register from './Component/Register/Register.jsx';
import AuthProvider from './Component/Auth/AuthProvider.jsx';
import Details from './Component/Details/Details.jsx';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        loader: ()=>fetch('/public/items.json'),
        element:<Home></Home>
      },
      {
        path:'/food/:id',        
        // loader:({params})=>fetch(`../public/items/${params.id}.json`),
        loader:()=>fetch(`/public/items.json`),
        element: <Details></Details>,

        // element:<PrivateRoute> <Details></Details> </PrivateRoute> //notDone
      }, 
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
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
