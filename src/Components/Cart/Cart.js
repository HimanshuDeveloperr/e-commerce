import React ,{useState}from "react";
import { Button, Modal } from "react-bootstrap";

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
const [state,setState]= useState(cartElements)
const deleteByIndex = index => {
    setState(oldValues => {
      return oldValues.filter((_, i) => i !== index)
    })
  }
  return (
    <div>
      <Modal
        show={props.show}
        onHide={props.onHide}
        // backdrop={props.backdrop}
        keyboard={props.keyboard}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {" "}
            <h2 style={{ marginLeft: "40%" }}>Cart</h2>
            <div>
              <h3
                style={{ display: "inline-block", textAlign: "left" }}
                className="m-4"
              >
                items
              </h3>
              <h3
                style={{
                  display: "inline-block",
                  textAlign: "center",
                  margin: "2.5rem",
                }}
              >
                title
              </h3>
              <h3
                style={{
                  display: "inline-block",
                  textAlign: "right",
                  margin: "2.5rem",
                }}
              >
                price
              </h3>
            </div>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {state.map((ele,index) => (
            <ul style={{ display: "flex" }} key={Math.random()}>
              <li style={{ listStyle: "none" }}>
                <span style={{ display: "flex" }} className="mt-lg-4">
                  <img src={ele.imageUrl} style={{ width: "20%" }} alt="items"></img>
                  <h4 style={{ width: "20%", marginLeft: "10%" }}>
                    {ele.title}
                  </h4>
                  <span
                    style={{
                      display: "inline-block",
                      marginLeft: "5%",
                      fontFamily: "fantasy",
                    }}
                  >
                    {ele.quantity}
                  </span>
                  <div style={{ marginLeft: "10px" }}>
                    <Button className="btn btn-danger p-2" onClick={() => deleteByIndex(index)}>Remove</Button>
                  </div>
                </span>
              </li>
            </ul>
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
