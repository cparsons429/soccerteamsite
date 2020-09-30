/**
 * @Author: colinparsons
 * @Date:   2020-08-21T16:47:03-07:00
 * @Last modified by:   colinparsons
 * @Last modified time: 2020-09-18T17:01:14-07:00
 * @License: License can be found in root directory at LICENSE.md, or at https://github.com/cparsons429/soccerteamsite/blob/master/LICENSE.md
 * @Copyright: Copyright (c) Colin Parsons @Last modified time. All rights reserved. Complete copyright information located in the License file (see above).
 */

import Link from "next/link";

import { Container, Navbar, Nav } from "react-bootstrap";

const Navigation = () => (
  <Container>
    <Navbar bg="white" expand="lg">
      <Link href="/">
        <Navbar.Brand>
          <img
            src="/brands/vercel.svg"
            alt="Kickers"
            style={{ width: 100 + "px" }}
            id="navbar-brand-image"
          />
        </Navbar.Brand>
      </Link>

      <Navbar.Toggle aria-controls="collapsibleNavbar" />
      <Navbar.Collapse id="collapsibleNavbar">
        <Nav className="ml-auto text-center text-lg-left">
          <Link href="/" id="nav-link-home">
            <a className="nav-link">Home</a>
          </Link>
          <Link href="/roster" id="nav-link-roster">
            <a className="nav-link">Roster</a>
          </Link>
          <Link href="/schedule" id="nav-link-schedule">
            <a className="nav-link">Schedule</a>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Container>
);

export default Navigation;
