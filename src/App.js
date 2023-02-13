
 import React from 'react'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import './App.css';
import Store from './Components/Routes/Store';
import About from "./Components/Routes/About"
import Home from "./Components/Routes/Home"
import ErrorPage from './Components/Routes/ErrorPage';


const router=createBrowserRouter([
  {path:"/",element:<Store/>,errorElement:<ErrorPage/>},
  {path:"/about",element:<About/>},
  {path:"/home",element:<Home/>},
  {path:"/store", element:<Store/>}
])


function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
