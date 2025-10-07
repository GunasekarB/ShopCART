import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md";
import { Button as ButtonM } from "@mui/material";

function NavBar() {
  let navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const raw = localStorage.getItem("currentUser");
    setUser(raw ? JSON.parse(raw) : null);
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setUser(null);
    navigate("/login");
  };
  return (
    <Navbar expand="lg" className="bg-body-tertiary shopcart">
      <Nav.Link
        as={Link}
        to="/"
        className="cart"
        style={{ textDecoration: "none", paddingLeft: "13px" }}
      >
        <h3>
          <b>ShopCART</b>
        </h3>
      </Nav.Link>
      <Container fluid>
        <Navbar.Toggle
          aria-controls="navbarScroll"
          style={{ flexDirection: "column" }}
        />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{
              maxHeight: "100px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            navbarScroll
          >
            {/* hello */}
          </Nav>
          <Form
            className="d-flex"
            style={{
              gap: "20px",
              alignItems: "center",
              justifyContent: "center",
            }}
            id="mobile-nav"
          >
            <Nav.Link as={Link} to="/" className="nav-link">
              Home
            </Nav.Link>
            {user ? (
              <NavDropdown
                title={user.name ? user.name.slice(0, 10) : "User"}
                id="user-nav-dropdown"
              >
                {/* Optionally add profile/navigation items here */}
                <NavDropdown.Item onClick={() => navigate("/wishlist")}>
                  My Orders
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={handleLogout}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Nav.Link as={Link} to="/login" className="nav-link">
                Login
              </Nav.Link>
            )}
            {/* <Nav.Link as={Link} to="/sign-up">
                Sign-Up
              </Nav.Link> */}
            <Nav.Link as={Link} to="/products" className="nav-link">
              Products
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-link">
              Contact
            </Nav.Link>
            <ButtonM
              variant="contained"
              color="warning"
              onClick={() => navigate("/wishlist")}
              style={{}}
            >
              {" "}
              Cart
              <MdShoppingCart />{" "}
            </ButtonM>
            {/* <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button> */}
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
