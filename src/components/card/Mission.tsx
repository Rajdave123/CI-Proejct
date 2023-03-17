import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import img from '../../assets/img1.jpg'
import { CardC } from './CardC'
export const Mission = () => {
  return (
    <Container fluid>
      <Row lg={3} md={2} sm={2} xs={1}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
          <Col>
            <CardC />
          </Col>
        ))}
      </Row>
    </Container>
  )
}
