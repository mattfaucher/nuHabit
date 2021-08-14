import React from "react";
import { Container, Card, Row, Col, Image } from "react-bootstrap";
import AuthButton from "./AuthButton.jsx";

export default class LandingPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    //css for overall page
    const landingContainer = {
      backgroundImage:
        "url(" +
        "https://images.unsplash.com/photo-1551632811-561732d1e306?ixid=MnwpxMjA3fDB8MHxzZWFyY2h8NHx8aGlraW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" +
        ")",
      minHeight: "500px",
      backgroundAttachment: "fixed",
      backgroundPosition: "center",
      backgroundRepeat: " no-repeat",
      backgroundSize: "cover",
    };

    //css for logo
    const logo = {
      position: "absolute",
      left: "55px",
      width: "300px",
      padding: "10px",
    };

    //css for mission statement
    const mission = {
      top: "30%",
      width: "50%",
      backgroundColor: "rgba(204, 255, 155, 0.6)",
      border: "3px solid",
      borderColor: "#000000",
      overflow: "auto",
    };
    const missionHeader = {
      letterSpacing: "1px",
      fontFamily: "Questrial",
      color: "#000000",
      fontWeight: "bold",
      fontSize: "41.5px",
      textAlign: "center",
    };
    const missionText = {
      letterSpacing: "1px",
      fontFamily: "Questrial",
      color: "#000000",
      fontWeight: "80",
      fontSize: "30px",
      textAlign: "center",
      lineHeight: "1.2",
    };

    //css Login/sign section
    const login = {
      margin: "auto",
      width: "70%",
      padding: "5px",
      border: "3px solid",
      borderColor: "#000000",

      color: "#000000",
      backgroundColor: "rgba(204, 255, 155, 0.4)",
      overflow: "auto",
    };

    const loginHeader = {
      letterSpacing: "1px",
      fontFamily: "Questrial",
      textAlign: "center",
      margin: "auto",
      fontWeight: "bold",
      fontSize: "41.5px",
    };

    const loginText = {
      letterSpacing: "1px",
      fontFamily: "Questrial",
      textAlign: "center",
      fontWeight: "80",
      fontSize: "30px",
      lineHeight: "1.2",
    };

    const loginButton = {
      margin: "auto",
      width: "20%",
    };

    //css for How it Works

    const add = {
      background: "#90EE90",
    };

    const earn = {
      background: "#92f471",
    };

    const accomplish = {
      background: "#55DD33",
    };

    const total = {
      background: "#32CD32",
    };
    return (
      <div className="landingContainer" style={landingContainer}>
        <Container>
          <div className="container">
            <div className="container" style={logo}>
              <div className="col"></div>
              <div className="col">
                <Image
                  src="https://i.imgur.com/wppMLHV.png"
                  alt="nuHabitLogo"
                  style={{
                    border: "3px solid",
                    borderColor: "#000000",
                    borderRadius: " 50%",
                    width: "18rem",
                  }}
                  roundedCircle
                />
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />

          <br />
          <div className="container" style={login}>
            <div className="header" style={loginHeader}>
              Easy Habit Management
              <p className="p1" style={loginText}>
                Want to Form a Habit? Or Break a Bad One? nuHabit Can Help!
              </p>
            </div>
            <br />
            <div className="button" style={loginButton}>
              <AuthButton />
            </div>

            <div className="col"></div>
          </div>

          <br></br>
          <br></br>

          <div className="container" style={mission}>
            <div className="header" style={missionHeader}>
              Our Mission
              <p style={missionText}>
                {" "}
                nuHabit was designed with the idea that having the ability to
                track gaining a new habit or breaking a bad one enourages active
                participation in the process, increasing the chance of success.
              </p>
            </div>
          </div>
          <div className="container">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <div className="card-group">
              <div className="card landing-card" style={add}>
                <Image
                  className="card-img-top"
                  src="https://img.icons8.com/color/452/bouncing-ball.png"
                  alt="Add a Habit "
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
              <div className="card landing-card" style={earn}>
                <Image
                  className="card-img-top"
                  src="https://www.freeiconspng.com/thumbs/badge-icon-png/badge-icon-png-22.png"
                  alt="Earn Badges"
                />
                <div className="card-body">
                  <h5 className="landing-card-title" text-align="center">
                    Earn Badges
                  </h5>
                  <p className="card-text landing-card-text">
                    The more times you complete the habit the more points
                    towards earning new badges
                  </p>
                </div>
              </div>
              <div className="card landing-card" style={accomplish}>
                <img
                  className="card-img-top"
                  src="https://static.thenounproject.com/png/492226-200.png"
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
              <div className="card landing-card" style={total}>
                <img
                  className="card-img-top rounded"
                  src="https://image.flaticon.com/icons/png/128/3483/3483089.png"
                  alt="View All Collected badges"
                />
                <div className="card-body">
                  <h5 className="landing-card-title" text-align="center">
                    Look at You Go!
                  </h5>
                  <p className="card-text landing-card-text landing-card-title">
                    View the total amount of times you have earned a badge and
                    pat yourself on the back
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
      </div>
    );
  }
}
