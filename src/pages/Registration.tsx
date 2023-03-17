import React from 'react'
import { CarouselC } from './../components/carousel/CarouselC'
import { Col, Container, Row } from 'react-bootstrap'
import { Formc } from '../components/Form/Formc';
export const Registration = () => {
  return (
    <Container fluid>
      <Row className="align-items-center">
        <Col sm={9}>
          <CarouselC />
        </Col>
        <Col sm={3}>
          <Formc />
        </Col>
      </Row>
    </Container>
  );
};
