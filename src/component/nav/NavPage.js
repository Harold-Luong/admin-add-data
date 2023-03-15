import React from "react";
import { Nav, Button } from "react-bootstrap";

const NavPage = () => {
  return (
    <Nav
      className="nav-page"
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link href="/home">
          <Button variant="outline-success">Home</Button>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">
          <Button variant="outline-success">Success</Button>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">
          <Button variant="outline-success">Success</Button>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-3">
          <Button variant="outline-success">Success</Button>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-4">
          <Button variant="outline-success">Success</Button>
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default NavPage;
