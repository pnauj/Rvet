import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CardProduct from "./cards/Cards";
import CarouselHome from "./carouselHome/CarouselHome";

const Home = () => {
  return (
    <div>
      <CarouselHome />
      <Container className="Container-fluid my-5">
        <h1>Lista</h1>
        <hr />
        <Row>
          <Col xl={3} lg={4} md={4}>
            <CardProduct />
          </Col>
          <Col xl={3} lg={4} md={4}>
            <CardProduct />
          </Col>
          <Col xl={3} lg={4} md={4}>
            <CardProduct />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
