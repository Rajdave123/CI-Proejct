import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { NavC } from './NavC'
import { Top } from './Top'
import { SearchData } from './SearchData'

export const Header = () => {
  return (
    <ListGroup>
      <ListGroup.Item>
        <Top />
      </ListGroup.Item>
      <ListGroup.Item className='p-0'>
        <NavC />
      </ListGroup.Item>
      <SearchData />
    </ListGroup>
  )
}
