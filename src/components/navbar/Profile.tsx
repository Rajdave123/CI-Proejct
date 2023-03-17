import React from 'react'
import { NavDropdown } from 'react-bootstrap'
import img from '../../assets/skype-photo.png'
export const Profile = () => {
  return (
    <div className='d-flex'>
      <img
        style={{ width: '50px', height: '50px' }}
        className='d-block rounded-circle'
        src={img}
        alt='profile pic'
      />
      <NavDropdown className='m-2' title='Raj Dave' id='navbarScrollingDropdown'>
        <NavDropdown.Item href='#action3'>Account</NavDropdown.Item>
        <NavDropdown.Item href='#action4'>Settings</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href='#action5'>Search</NavDropdown.Item>
      </NavDropdown>
    </div>
  )
}
