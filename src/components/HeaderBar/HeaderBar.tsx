import { Container, Row, Col } from "react-bootstrap";

export default function HeaderBar() {
  return (
    <Container>
      <Row>
        <Col>Central de Atendimento</Col>
        <Col>Email: contato@karhub.com.br</Col>
        <Col>Precisa de ajuda?</Col>
      </Row>
    </Container>
  );
}
