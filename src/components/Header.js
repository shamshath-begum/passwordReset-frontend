import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import "./header.css";

function Header() {
  let navigate = useNavigate();
  let handleLogout = async () => {
    sessionStorage.clear();
    navigate("/login");
  };
  return (
    <>
      <Navbar className="color">
        <Container>
          <Navbar.Brand style={{ color: "white" }}>
            Password Reset Flow
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Button onClick={() => handleLogout()}>LogOut</Button>
              <a href="#login"></a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
