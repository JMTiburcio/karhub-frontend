import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

export default function NewsLetter() {
  return (
    <Container className="mx-auto">
      <Row>
        <Col md={12}>
          <h3>Economize tempo, economize dinheiro!</h3>
          <p>Inscreva-se e enviaremos as melhores ofertas para você</p>
        </Col>
        <Col md={12}>
          <Form>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="seu melhor email" />
                </Form.Group>
              </Col>
              <Col>
                <Button variant="primary" type="submit">
                  Inscreva-se
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
