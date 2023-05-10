import Image from "next/image";
import { Navbar, Container, Nav, NavDropdown, Form } from "react-bootstrap";

export default function NextNavbar() {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="/">
          <Image
            src="/karhub-logo-01-main.png"
            width={100}
            height={40}
            alt="karhub"
          />
        </Navbar.Brand>

        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
        </Form>

        <Nav>
          <NavDropdown
            title="Entre ou cadastre-se"
            id="collasible-nav-dropdown"
          >
            <NavDropdown.Item href="#">Entrar</NavDropdown.Item>
            <NavDropdown.Item href="#">Cadastrar</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Icone" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#">Meu carrinhos</NavDropdown.Item>
            <NavDropdown.Item href="#">Finalizar compra</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
}
