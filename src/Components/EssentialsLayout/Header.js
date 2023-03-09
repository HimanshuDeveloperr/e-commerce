import React, { useContext, useState } from "react";
import { Button, Container, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom"
import Cart from "../Cart/Cart";
import CartContext from "../Store/CartContext";

const Header = () => {
const context=useContext(CartContext)
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);


  const totalNumber=context.products.reduce((acc,cur)=>{
    return acc+cur.quantity;
  },0)




   
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Nav className="m-auto">
          
            <NavLink className="m-3" to="/home" style={{color:'orange',textDecorationColor:'whitesmoke',textDecoration:'none'}}>Home</NavLink>

            <NavLink className="m-3" to="/store" style={{color:'orange',textDecorationColor:'whitesmoke',textDecoration:'none'}}>Store</NavLink>
          
            <NavLink className="m-3" to="/about" style={{color:'orange',textDecorationColor:'whitesmoke',textDecoration:'none'}}>About</NavLink>

            <NavLink className="m-3" to="/contactus" style={{color:'orange',textDecorationColor:'whitesmoke',textDecoration:'none'}}>Contact Us</NavLink>

            <NavLink className="m-3" to="/Products" style={{color:'orange',textDecorationColor:'whitesmoke',textDecoration:'none'}}>Products</NavLink>

            <NavLink className="m-3" to="/Logout" style={{color:'orange',textDecorationColor:'whitesmoke',textDecoration:'none'}}>Logout</NavLink>
          
        </Nav>
      </Container>
      <Button className="m-2" variant="outline-info" onClick={handleShow}>
        Cart <span>{totalNumber}</span>
      </Button>
      <Cart
        show={show}
        onHide={handleClose}
      //   backdrop="static"
        keyboard={false}
        onClick={handleClose}
      />
    </Navbar>
  );
};

export default Header;
