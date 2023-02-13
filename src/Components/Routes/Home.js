import React ,{Fragment}from 'react'
import { Container, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom"
import Footer from '../EssentialsLayout/Footer';
import HomeGrid from './HomeGrid';

const Home = () => {
  return (
    <Fragment>
  
    <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="m-auto">
            
              <NavLink className="m-3" to="/home" style={{color:'orange',textDecorationColor:'whitesmoke'}}>Home</NavLink>
  
              <NavLink className="m-3" to="/store" style={{color:'orange',textDecorationColor:'whitesmoke'}}>Store</NavLink>
            
              <NavLink className="m-3" to="/about" style={{color:'orange',textDecorationColor:'whitesmoke'}}>About</NavLink>
            
          </Nav>
        </Container>
      </Navbar>
      <HomeGrid/>
<div style={{marginTop:"50px"}}>

      <Footer/>
</div>
      </Fragment>
  )
}

export default Home