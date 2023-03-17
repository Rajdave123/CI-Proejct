import React from 'react'
import { NavDropdown } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

export const NavC = () => {
  return (
    <Navbar bg='light' expand='lg'>
      <Container fluid className='p-0'>
        <Form className='d-flex px-0'>
          <Form.Control
            type='search'
            placeholder='Search Mission'
            className='ms-5'
            aria-label='Search'
          />
        </Form>

        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'>
          <Nav
            className='ms-auto me-auto my-lg-0'
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavDropdown
              className='ms-5'
              title='Country'
              id='navbarScrollingDropdown'
            >
              <NavDropdown.Item href='#action3'>Action</NavDropdown.Item>
              <NavDropdown.Item href='#action4'>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action5'>
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              className='ms-5'
              title='City'
              id='navbarScrollingDropdown'
            >
              <NavDropdown.Item href='#action3'>Action</NavDropdown.Item>
              <NavDropdown.Item href='#action4'>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action5'>
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              className='ms-5'
              title='Theme'
              id='navbarScrollingDropdown'
            >
              <NavDropdown.Item href='#action3'>Action</NavDropdown.Item>
              <NavDropdown.Item href='#action4'>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action5'>
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              className='ms-5'
              title='Skills'
              id='navbarScrollingDropdown'
            >
              <NavDropdown.Item href='#action3'>Action</NavDropdown.Item>
              <NavDropdown.Item href='#action4'>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action5'>
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
