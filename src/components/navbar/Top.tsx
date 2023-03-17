import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Profile } from './Profile'

export const Top = () => {
  return (
    <Container className='mt-2'>
      <Row>
        <Col xs={6}>
          <Row>
            <Col xs={0} sm={2} md={4} />
            <Col xs={2} sm={4} md={1}>
              <div>Stories</div>
            </Col>
            <Col xs={2} sm={1} md={2} />
            <Col xs={2} sm={4} md={1}>
              <div>Policy</div>
            </Col>
          </Row>
        </Col>

        <Col xs={6}>
          <Row>
            <Col xs={0} sm={2} md={4} />
            <Col xs={6} sm={4} md={8}>
              <Profile />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}
