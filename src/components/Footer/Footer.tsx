import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";

const linksInstitucional = [
  { texto: "A Empresa", href: "#" },
  { texto: "Nossas Lojas", href: "#" },
  { texto: "Trabalhe Conosco", href: "#" },
  { texto: "Mapa do Site", href: "#" },
  { texto: "Contato", href: "#" },
];

const linksDuvidas = [
  { texto: "Como Comprar", href: "#" },
  { texto: "Esqueci Minha Senha", href: "#" },
  { texto: "Acompanhar Pedido", href: "#" },
  { texto: "Reimpressão de Boleto", href: "#" },
  { texto: "Vale-presentes e Cupons", href: "#" },
  { texto: "Segurança", href: "#" },
  { texto: "Forma Pagamento", href: "#" },
  { texto: "Troca e Devolução", href: "#" },
  { texto: "Prazo de Entrega", href: "#" },
  { texto: "Entrega", href: "#" },
  { texto: "Privacidade", href: "#" },
  { texto: "Dúvidas Frequentes", href: "#" },
];

const Footer = () => {
  return (
    <footer className="border-top mt-5 py-4">
      <Container>
        <Row>
          <Col sm={5}>
            {/* Atendimento */}
            <h4>Atendimento</h4>
            <span>(11) 5555-7360</span>
            <p>Segunda à sexta das 8h às 18h</p>

            {/* Redes Sociais */}
            <p>Acompanhe nossas redes sociais</p>
            <Link href="https://www.linkedin.com/company/energen-info/">
              <FaLinkedin size={28} />
            </Link>
            <Link href="https://twitter.com/illuminemNews">
              <FaTwitter size={28} />
            </Link>
          </Col>

          {/* Links do Footer */}
          <Col sm={7}>
            <Row>
              <FooterLinks
                title="Institucional"
                links={linksInstitucional}
                size={4}
              />
              <FooterLinks title="Dúvidas" links={linksDuvidas} size={8} />
            </Row>
          </Col>
        </Row>
        <p className="text-muted small">
          © 2023 illuminem. All rights reserved. Various trademarks held by
          their owners.
        </p>
      </Container>
    </footer>
  );
};

interface FooterLinksProps {
  title: string;
  links: { texto: string; href: string }[];
  size: number;
}

const FooterLinks = ({ title, links, size }: FooterLinksProps) => {
  return (
    <Col sm={size}>
      <h4>{title}</h4>
      <div className="d-flex flex-column">
        {links.map((link) => (
          <Link key={link.texto} href={link.href}>
            {link.texto}
          </Link>
        ))}
      </div>
    </Col>
  );
};

export default Footer;
