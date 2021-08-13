import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { withAuth0 } from "@auth0/auth0-react";

import logo from '../listing.png';
import LogoutButton from "./LogoutButton.jsx";

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.user.name,
      nickname: props.user.nickname,
      email: props.user.email,
      picture: props.user.picture,
      id: props.user.sub,
    };
  }
  
  render() {
    return (
      <Navbar sticky="top" collapseOnSelect expand="md" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/habits">
          <img 
            src={logo}
            width='50'
            height='50'
          />{' '}nuHabit
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/completed">Completed Habits</Nav.Link>
              <Nav.Link href="/collection">Collection</Nav.Link>
            </Nav>
            <Nav className="ml-auto">
              <Nav.Item style={{ color: "white", marginRight: "10px" }}>
                <img
                  src={this.state.picture}
                  style={{
                    width: "30px",
                    borderRadius: "100px",
                    margin: "5px 5px 5px 0px"
                  }}
                ></img>
                {this.state.name}
              </Nav.Item>
            </Nav>
            <Nav className="ml-auto">
              <Nav.Item>
                <LogoutButton />
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default withAuth0(Navigation);
