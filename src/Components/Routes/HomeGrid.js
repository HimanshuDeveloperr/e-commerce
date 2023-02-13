import React, { Fragment } from 'react'
import {Card,Button,Col,Row,Container} from "react-bootstrap"
const HomeGrid = () => {
  return <Fragment>

   <Card
    style={{
      height: "25rem",
      backgroundColor: "#808080",
      marginTop: "2px",
    }}
  >
    <Card.Body
      style={{
        color: "white",
        textAlign: "center",
        fontFamily: "timesnewroman",
      }}
    >
      <h1 style={{ fontSize: "8rem" }}>The Generics</h1>
      <Button
        variant="outline-info"
        size="lg"
        style={{
          border: "2px solid",
          cursor: "pointer",
          borderRadius: "2px 2px",
          fontSize: '25px',
          width: '20rem',
          height: '4rem',
          
        }}
      >
        Get Our Latest Album
      </Button>
      <Button
        variant="outline-info"
        size="lg"
        style={{
          display: "block",
          borderRadius: "50%",
          height: "5rem",
          width: "5rem",
          border: "2px solid",
          margin: "20px auto",
          cursor: "pointer",
          fontSize: '22px',
        }}
      >
        Play
      </Button>
    </Card.Body>
    </Card>
    <Container>
      <h1
        style={{ textAlign: "center", fontFamily: "fantasy", padding: "20px" }}
      >
        TOURS
      </h1>
      <div>
        <Row style={{ borderBottom: "1px solid black", margin: "4px auto" }}>
          <Col>
            <span>DEC 31</span>
          </Col>
          <Col>
            <span style={{ color: "gray" }}>DETROIT, MI</span>
          </Col>
          <Col>
            <span style={{ color: "gray" }}>DTE ENERGY MUSIC THEATRE</span>
          </Col>
          <Col>
            <Button
              variant="info"
              style={{ margin: "4px auto", height: "2rem", width: "10rem" }}
            >
              BUY TICKETS
            </Button>
          </Col>
        </Row>
        <Row
          style={{
            borderBottom: "1px solid black",
            margin: "4px auto",
            marginTop: "20px",
          }}
        >
          <Col>
            <span>DEC 11</span>
          </Col>
          <Col>
            <span style={{ color: "gray" }}>TORONTO,ON</span>
          </Col>
          <Col>
            <span style={{ color: "gray" }}>BUDWEISER STAGE</span>
          </Col>
          <Col>
            <Button
              variant="info"
              style={{ margin: "4px auto", height: "2rem", width: "10rem" }}
            >
              BUY TICKETS
            </Button>
          </Col>
        </Row>
        <Row
          style={{
            borderBottom: "1px solid black",
            margin: "4px auto",
            marginTop: "20px",
          }}
        >
          <Col>
            <span>DEC 15</span>
          </Col>
          <Col>
            <span style={{ color: "gray" }}>BRISTOW, VA</span>
          </Col>
          <Col>
            <span style={{ color: "gray" }}>JIGGY LUBE LIVE</span>
          </Col>
          <Col>
            <Button
              variant="info"
              style={{ margin: "4px auto", height: "2rem", width: "10rem" }}
            >
              BUY TICKETS
            </Button>
          </Col>
        </Row>
        <Row
          style={{
            borderBottom: "1px solid black",
            margin: "4px auto",
            marginTop: "20px",
          }}
        >
          <Col>
            <span>DEC 21</span>
          </Col>
          <Col>
            <span style={{ color: "gray" }}>PHOENIX, AZ</span>
          </Col>
          <Col>
            <span style={{ color: "gray" }}>AK-CHIN PAVILION</span>
          </Col>
          <Col>
            <Button
              variant="info"
              style={{ margin: "4px auto", height: "2rem", width: "10rem" }}
            >
              BUY TICKETS
            </Button>
          </Col>
        </Row>
        <Row
          style={{
            borderBottom: "1px solid black",
            margin: "4px auto",
            marginTop: "20px",
          }}
        >
          <Col>
            <span>DEC 25</span>
          </Col>
          <Col>
            <span style={{ color: "gray" }}>LAS VEGAS, NV</span>
          </Col>
          <Col>
            <span style={{ color: "gray" }}>T-MOBILE ARENA</span>
          </Col>
          <Col>
            <Button
              variant="info"
              style={{ margin: "4px auto", height: "2rem", width: "10rem" }}
            >
              BUY TICKETS
            </Button>
          </Col>
        </Row>
        <Row
          style={{
            borderBottom: "1px solid black",
            margin: "4px auto",
            marginTop: "20px",
          }}
        >
          <Col>
            <span>DEC 31</span>
          </Col>
          <Col>
            <span style={{ color: "gray" }}>C1NCORD, CA</span>
          </Col>
          <Col>
            <span style={{ color: "gray" }}>CONCORD PAVILION</span>
          </Col>
          <Col>
            <Button
              variant="info"
              style={{ margin: "4px auto", height: "2rem", width: "10rem" }}
            >
              BUY TICKETS
            </Button>
          </Col>
        </Row>
      </div>
    </Container>
  </Fragment>
  
}

export default HomeGrid