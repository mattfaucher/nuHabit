import React from "react";
import { Container, Card, Row, Col, Image } from "react-bootstrap";
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
    };

    const mission = {
      top: "30%",
      width: "0%",
      whiteSpace: "nowrap",
    };
    const missionHeader = {
      letterSpacing: "1px",
      fontFamily: "Questrial",

      fontWeight: "bold",
      fontSize: "41.5px",
      textAlign: "left",
    };
    const missionText = {
      letterSpacing: "1px",
      fontFamily: "Questrial",

      fontWeight: "80",
      fontSize: "30px",
      textAlign: "left",
      lineHeight: "1.2",
    };

    const landingContainer = {
      backgroundColor: "#66CDAA",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    };

    const logo = {
      position: "absolute",
      left: "55px",
      width: "300px",
      padding: "10px",
    };

    return (
      <Container className="landingContainer" style={landingContainer}>
        <div className="container">
          <br></br>
        </div>
        <div className="container" style={logo}>
          <div className="col"></div>
          <div className="col">
            <Image
              src="https://i.imgur.com/wppMLHV.png"
              alt="nuHabitLogo"
              roundedCircle
            />
          </div>
        </div>
        <br />
        <br />
        <div className="container" style={mission}>
          <h1 style={missionHeader}>Our Mission</h1>

          <p style={missionText}>Statement</p>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className="container">
          <div className="col-4">
            <br />
            <br />
            <br />
            <br />
            <h1 className="h1">Easy Habit Management</h1>
            <p className="p1">
              Want to Form a Habit? Or Break a Bad One? nuHabit Can Help!
            </p>
            <br />
            <AuthButton />
          </div>

          <div className="col"></div>
        </div>

        <div className="container">
          <div className="row-6">
            <br></br>
            <br></br>
            <h1 className="h3">How It Works</h1>
            <br></br>
          </div>

          <div className="card-group">
            <div className="card landing-card">
              <Image
                className="card-img-top"
                src="https://i.imgur.com/wppMLHV.png"
                alt="Add a Habit view habit details imgx2"
                roundedCircle
              />
              <div className="card-body">
                <h5 className="landing-card-title" text-align="center">
                  Add a New Habit
                </h5>
                <p className="card-text landing-card-text">
                  Name it, set whether you want to form or break it, and chose
                  whether it's a daily or weekly habit
                </p>
              </div>
            </div>
            <div className="card landing-card">
              <Image
                className="card-img-top"
                src="https://i.imgur.com/wppMLHV.png"
                alt="Add a Habit view habit details imgx2"
                roundedCircle
              />
              <div className="card-body">
                <h5 className="landing-card-title" text-align="center">
                  Earn Badges
                </h5>
                <p className="card-text landing-card-text">
                  The more times you complete the habit the more points towards
                  earning new badges
                </p>
              </div>
            </div>
            <div className="card landing-card">
              <img
                className="card-img-top rounded"
                src="https://i.imgur.com/wppMLHV.png"
                alt="View Completed Habits"
              />
              <div className="card-body">
                <h5 className="landing-card-title" text-align="center">
                  Look at What You've Accomplished!
                </h5>
                <p className="card-text landing-card-text">
                  View all your newly formed or broken habits so you can see
                  just how far you've come
                </p>
              </div>
            </div>
            <div className="card landing-card">
              <img
                className="card-img-top rounded"
                src="https://i.imgur.com/wppMLHV.png"
                alt="View All Collected badges"
              />
              <div className="card-body">
                <h5 className="landing-card-title" text-align="center">
                  Look at You Go!
                </h5>
                <p className="card-text landing-card-text landing-card-title">
                  View the total amount of times you have earned a badge and pat
                  yourself on the back
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </Container>
    );
  }
}
