import React from 'react'
import { Input } from '../components/Form/Input'
import { CarouselC } from './../components/carousel/CarouselC'
import { Col, Container, Row } from 'react-bootstrap'
import { LoginInput } from '../components/Form/LoginInput'

export const Login = () => {
  return (
    <Container fluid>
      <Row className='align-items-center'>
        <Col sm={9}>
          <CarouselC />
        </Col>
        <Col sm={3}>
          <LoginInput />
        </Col>
      </Row>
    </Container>
  )
}
