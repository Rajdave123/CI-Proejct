import React from 'react'
import { CarouselC } from './../components/carousel/CarouselC'
import { Col, Container, Row } from 'react-bootstrap'
import { LoginInput } from '../components/Form/LoginInput'

export const Login = () => {
  return (
    <Container fluid>
      <Row className='align-items-center'>
        <Col md={9} className='ps-0'>
          <CarouselC />
        </Col>
        <Col md={3}>
          <LoginInput />
        </Col>
      </Row>
    </Container>
  )
}
