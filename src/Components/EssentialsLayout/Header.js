import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap';

const Header=()=>{
    const count="0"
    return <Navbar bg='dark'  variant='dark'>
        <Container>
            <Nav className="m-auto">
             <Nav.Item className='m-3'>
                <Nav.Link>Home</Nav.Link>
             </Nav.Item>
             <Nav.Item className='m-3'>
                <Nav.Link>Store</Nav.Link>
             </Nav.Item>
             <Nav.Item className='m-3'> 
                <Nav.Link>About</Nav.Link>
             </Nav.Item>
            </Nav>
        </Container>
        <Button variant="outline-info">Cart <span>{count}</span> </Button>
        
        
   </Navbar>
   
    
}

export default Header;