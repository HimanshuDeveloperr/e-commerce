import React, { Fragment, useRef } from 'react'
import { Form,Button } from 'react-bootstrap'
import Grid from '../EssentialsLayout/Grid'
import { NavLink } from 'react-router-dom'
import { Nav,Container,Navbar } from 'react-bootstrap'

import "./ContactUs.css"
import Footer from '../EssentialsLayout/Footer'

const Contactus = () => {

    const NameHandler=useRef("")
    const MailHandler=useRef("")
    const NumberHandler=useRef("")

 async function storingDetailsFN (){
    const details={
        name:NameHandler.current.value,
        mail:MailHandler.current.value,
        Number:NumberHandler.current.value
      }
      console.log(details)
      //storing the details in firebase
      const response=await fetch("https://e-commerce-details-api-default-rtdb.firebaseio.com/details.json",{
        method:"POST",
        body:JSON.stringify(details),
        headers: {
            "Content-Type": "application/json"
          }
      })
      const data=response.json()
      console.log(data)
 }

   const SubmitHandler= (event)=>{
      event.preventDefault();

      //storing the details in firebase
       storingDetailsFN()

   }
  return (
    <Fragment >
        <Navbar bg="dark" variant="dark">
      <Container>
        <Nav className="m-auto">
          
            <NavLink className="m-3" to="/home" style={{color:'orange',textDecorationColor:'whitesmoke',textDecoration:'none'}}>Home</NavLink>

            <NavLink className="m-3" to="/store" style={{color:'orange',textDecorationColor:'whitesmoke',textDecoration:'none'}}>Store</NavLink>
          
            <NavLink className="m-3" to="/about" style={{color:'orange',textDecorationColor:'whitesmoke',textDecoration:'none'}}>About</NavLink>

            
            <NavLink className="m-3" to="/contactus" style={{color:'orange',textDecorationColor:'whitesmoke',textDecoration:'none'}}>Contact Us</NavLink>
          
        </Nav>
      </Container>
    </Navbar>
    
    <Grid/>

         <Form onSubmit={SubmitHandler} className="m-3">

         <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{color:"green"}}>Name</Form.Label>
        <Form.Control type="text" ref={NameHandler} placeholder="Your Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{color:"green"}}>Email address</Form.Label>
        <Form.Control type="email" ref={MailHandler} placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label style={{color:"green"}}>Phone Number</Form.Label>
        <Form.Control type="number" ref={NumberHandler} placeholder="Phone Number" />
      </Form.Group>
      <Button variant="warning" type="submit">
        Submit
      </Button>
    </Form>
    <Footer/>
    </Fragment>
  )
}

export default Contactus