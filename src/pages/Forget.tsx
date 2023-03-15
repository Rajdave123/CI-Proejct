import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { CarouselC } from "../components/carousel/CarouselC";
import { ForgetC } from "../components/Form/ForgetC";

export const Forget = () => {
  return (
    <Container fluid>
      <Row className="align-items-center">
        <Col sm={9}>
          <CarouselC />
        </Col>
        <Col sm={3}>
          <ForgetC />
        </Col>
      </Row>
    </Container>
  );
};
