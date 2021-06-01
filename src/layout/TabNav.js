import React from "react";
import { Nav } from "react-bootstrap";

const TabNav = () => {
  return (
    <Nav variant="tabs" defaultActiveKey='#'>
        <Nav.Item eventKey='1'>
          <Nav.Link href='#' active>Fresh</Nav.Link>
        </Nav.Item>
        <Nav.Item eventKey='disabled'>
          <Nav.Link href='\fresh' disabled>Hot</Nav.Link>
        </Nav.Item>
    </Nav>
  );
};

export default TabNav;
