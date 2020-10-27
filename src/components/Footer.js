import React from "react";

import { Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <Row className="footer mt-3">
      <Container className="p-3">
        <p>¿Quienes somos?</p>
        <p>¿Que hacemos?</p>
        <p>¿Que solucion deseas?</p>
        <p>Escribenos</p>
      </Container>
    </Row>
  );
};

export default Footer;
