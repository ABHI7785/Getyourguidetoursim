import React from 'react'
import{ Button, Container, Form, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import img1 from './images/images.png'
import {FiLogIn} from 'react-icons/fi'
import{BsQuestionCircle,BsCartDash} from 'react-icons/bs'



const Navbar1 = () => {
  return (
    <div>
       <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">
<img src={img1} alt=''/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {/* <Nav.Link href="#action1">English</Nav.Link>
            <Nav.Link href="#action2">INR</Nav.Link> */}
            <NavDropdown title="English" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown  title="INR ₹"  id="navbarScrollingDropdown">
            
              <NavDropdown.Item href="#action6">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action7">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action8">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action9">
            ❤ Whishlist 
            </Nav.Link>
            <Nav.Link href="#action10">
            {<><BsCartDash/> {'Help'} </>}
            </Nav.Link>
            <Nav.Link href="#action11">
            {<>{'Help'} <BsQuestionCircle/></>}
            </Nav.Link>
            <NavDropdown   title={<>{'login'}<FiLogIn/></>}  id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action6">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action7">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action8">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            
          <Button variant="primary">Sign up</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
       
    </div>
  )
}

export default Navbar1