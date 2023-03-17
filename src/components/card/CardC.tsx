import React from 'react'
import { Card, Button, Container } from 'react-bootstrap'
import img from '../../assets/img1.jpg'
export const CardC = () => {
  return (
    <Card style={{ width: '90%', margin: 'auto' }}>
      <Card.Img variant='top' src={img} />
      <Card.Body>
        <Card.Title>Mission Mangle</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Corporis unde vel odit iusto quidem sed iste
          cupiditate laboriosam repudiandae! Tempore.
        </Card.Text>
        <Button variant='primary'>Go somewhere</Button>
      </Card.Body>
    </Card>
  )
}
