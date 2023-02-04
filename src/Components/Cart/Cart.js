import React from "react";
import { Button, Modal,Card,Row,Col} from "react-bootstrap";


const cartElements = [
  {
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

    quantity: 2,
  },

  {
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

    quantity: 3,
  },

  {
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

    quantity: 1,
  },
];
const Cart = (props) => {
  return (
    <div>
      <Modal
        show={props.show}
        onHide={props.onHide}
        // backdrop={props.backdrop}
        keyboard={props.keyboard}
      >
        <Modal.Header closeButton>
          <Modal.Title> <h2 style={{ marginLeft: "40%" }}>Cart</h2>
          <div>

          <h3 style={{display:"inline-block" , textAlign:"left"}} className="m-4">items</h3>
          <h3 style={{display:"inline-block",textAlign: "center"}} className="m-4">title</h3>
          <h3 style={{display:"inline-block", textAlign:"right"}} className="m-4">price</h3>
          </div>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {cartElements.map((ele) => (
            // <Container key={Math.random()}>

            //   <Row className="g-0" >

            // <Card  style={{ width: "50%",marginLeft: "25%" }}>
            //     <Col>
            //   <Card.Title style={{ display: "block", textAlign: "center" }}>
            //     {ele.title}
            //     <span style={{ display: "block", textAlign: "center" }}>
            //       ${ele.price} - {ele.quantity}
            //     </span>
            //   </Card.Title>
            //   </Col>
            //   <Col>
            //   <Card.Body>
            //     <Card.Img
            //       alt="items in cart"
            //       src={ele.imageUrl}
            //       className="cardimg"
            //     />
            //   </Card.Body>
            // </Col>
            // </Card>
            // </Row>
            // </Container>
            <Card style={{ maxWidth: '540px' }}>
      <Row className='g-0'>
        <Col md='4'>
          <Card.Img src={ele.imageUrl} alt='...' fluid />
        </Col>
        <Col md='8'>
          <Card.Body>
            <Card.Title>{ele.title}</Card.Title>
            <Card.Text>
              {ele.price}  
            </Card.Text>
            <Card.Text>
            {ele.quantity}
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
            
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onClick}>
            Close
          </Button>
          <Button variant="primary">purchase</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Cart;
