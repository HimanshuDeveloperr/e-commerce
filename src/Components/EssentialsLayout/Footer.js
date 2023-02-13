import React from 'react'
import {NavLink} from "react-router-dom"
const Footer = () => {
  return (
    <div className='p-5 text-center bg-success text-white'>
    <h1 className='mb-3'>The Generics</h1>

    <div>

    <NavLink to="https://www.youtube.com/" className="mx-5" style={{color:'white',textDecorationColor:'black'}}>youtube</NavLink>
    </div>
    <div>
    <NavLink to="https://open.spotify.com/?" className="mx-5" style={{color:'white',textDecorationColor:'black'}}>spotify</NavLink>
    </div>
    <div>
    <NavLink to="https://www.facebook.com/" className="mx-5" style={{color:'white',textDecorationColor:'black'}}>facebook</NavLink>
    </div>
    </div>
  )
}

export default Footer