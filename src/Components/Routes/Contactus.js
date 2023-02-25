import React, { useRef } from 'react'
import { Form,Button } from 'react-bootstrap'

import "./ContactUs.css"

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
    <div className='m-5' >
         <Form onSubmit={SubmitHandler}>

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
    </div>
  )
}

export default Contactus