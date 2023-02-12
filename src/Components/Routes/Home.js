import React ,{Fragment}from 'react'
import { Container, Nav, Navbar} from "react-bootstrap";
import Grid from '../EssentialsLayout/Grid'
import {NavLink} from "react-router-dom"

const Home = () => {
  return (
    <Fragment>
  
    <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="m-auto">
            
              <NavLink className="m-3" to="/home">Home</NavLink>
  
              <NavLink className="m-3" to="/store">Store</NavLink>
            
              <NavLink className="m-3" to="/about">About</NavLink>
            
          </Nav>
        </Container>
      </Navbar>
      
      <Grid/>
      </Fragment>
  )
}

export default Home