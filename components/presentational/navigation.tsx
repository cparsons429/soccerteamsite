import Link from "next/link";

import { Container, Navbar, Nav } from "react-bootstrap";

const Navigation = () => (
  <Container>
    <Navbar bg="white" expand="lg">
      <Link href="/">
        <Navbar.Brand>
          <img src="/vercel.svg" alt="Kickers" style={{ width: 100 + "px" }} />
        </Navbar.Brand>
      </Link>

      <Navbar.Toggle aria-controls="collapsibleNavbar" />

      <Navbar.Collapse id="collapsibleNavbar">
        <Nav className="ml-auto text-center text-lg-left">
          <Link href="/">
            <a className="nav-link">Home</a>
          </Link>
          <Link href="/roster">
            <a className="nav-link">Roster</a>
          </Link>
          <Link href="/schedule">
            <a className="nav-link">Schedule</a>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Container>
);

export default Navigation;
