
 import React from 'react'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import './App.css';
import Store from './Components/Routes/Store';
import About from "./Components/Routes/About"
import Home from "./Components/Routes/Home"
import ErrorPage from './Components/Routes/ErrorPage';
import Contactus from './Components/Routes/Contactus';
import ProductsOnly from './Components/Routes/ProductsOnly';
import ProductDetails from './Components/Routes/ProductDetails';
import Login from './Components/Routes/Login';
import Logout from './Components/Routes/Logout';


const router=createBrowserRouter([
  {path:"/login",element:<Login/>,errorElement:<ErrorPage/>},
  {path:"/about",element:<About/>},
  {path:"/",element:<Home/>},
  {path:"/store", element:<Store/>},
  {path:"/contactus",element:<Contactus/>},
  {path:"/products",element:<ProductsOnly/>},
  {path:"/Product-Details/:Id",element:<ProductDetails/>},
  {path:"/Logout",element:<Logout/>}
])


function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
