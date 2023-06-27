import React, { Fragment } from 'react'

const RootLayout = () => {
  return (
    <Fragment>
  
  <Navbar bg="dark" variant="dark">
      <Container>
        <Nav className="m-auto">
          
            <NavLink className="m-3" to="/">Home</NavLink>

            <NavLink className="m-3" to="/store">Store</NavLink>
          
            <NavLink className="m-3" to="/about">About</NavLink>
          
        </Nav>
      </Container>
    </Navbar>
    
    <Grid/>
    </Fragment>
  )
}

export default RootLayout
