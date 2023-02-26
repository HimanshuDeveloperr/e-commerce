import React,{Fragment} from 'react'
import {  NavLink } from 'react-router-dom';
import { Card } from 'react-bootstrap';


const productsArr = [
    {
      title: "Colors",
  
      price: 100,
  
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  
      id:1
    },
  
    {
      title: "Black and white Colors",
  
      price: 50,
  
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      id:2
    },
  
    {
      title: "Yellow and Black Colors",
  
      price: 70,
  
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      id:3
    },
  
    {
      title: "Blue Color",
  
      price: 100,
  
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
      id:4
    },
  ];
  


const ProductsOnly = () => {
  return (
    <Fragment>
  {productsArr.map((product)=>(
    <form style={{ width: '18rem',display: "inline-block", flexWrap: "wrap" }} className="m-3"  key={Math.random()} >
        <Card className="shadow-lg m-5" key={Math.random()} style={{ width: '18rem',display: "inline-block", flexWrap: "wrap" }}>
            <Card.Img variant="top"  src={product.imageUrl} ></Card.Img>
            <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>{product.price}</Card.Text>
            <NavLink to="/Product-Details">Product Details</NavLink>

            </Card.Body>
        

        </Card>
    </form>
))}
    </Fragment>
  )
}

export default ProductsOnly