import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import AuthButton from "./AuthButton.jsx";

export default class LandingPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const backgroundStyle = {
      backgroundImage:
        "url(" +
        "https://images.unsplash.com/photo-1551632811-561732d1e306?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aGlraW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" +
        ")",
      position: "fixed",
      top: 0,

      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      minHeight: "100vh",
    };

    const cardStyle = {
      margin: 0,
      position: "absolute",
      top: "50%",
      left: "50%",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    };

    const cardText = {
      fontSize: "xx-large",
    };

    return (
      <Container fluid style={backgroundStyle}>
        <Card style={cardStyle}>
          <Card.Img variant="top" src="https://i.imgur.com/wppMLHV.png" />
          <Card.Body className="card-body align-items-center d-flex justify-content-center">
            <Card.Title style={cardText}>Welcome To nuHabit</Card.Title>
          </Card.Body>
          <AuthButton />
        </Card>
      </Container>
    );
  }
}
